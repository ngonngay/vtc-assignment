const productRouter = require('express').Router();
const Product = require('../models/product');
const logger = require('../utils/logger');
const middleware = require('../utils/middleware');
const path = require('path');
const pug = require('pug');
// Compile the source code

// @route GET products
// @decs get all product, return html
// @access public
productRouter.get('/', async (request, response) => {
	//({$text: {$search: "test"}},{score: {$meta: "textScore"} }).sort({score:{$meta:"textScore"}})
	const search = request.query.search;
	const category = request.query.category;
	const pagesize = Number(request.query.pagesize) || 16;
	const pageIndex = request.query.page || 1;
	const projection = { name: 1, ancestor_categories: 1, price: 1, slug: 1, assets: 1 };
	//console.log(search);
	if (search) {
		let result = await Product.find(
			{ $text: { $search: search } },
			{ score: { $meta: 'textScore' }, ...projection },
		)
			.sort({ score: { $meta: 'textScore' } })
			.limit(pagesize)
			.skip(pageIndex * pagesize - pagesize);
		let pageTotal = await Product.find(
			{ $text: { $search: search } },
			{ score: { $meta: 'textScore' }, projection },
		).count();
		if (result.length == 0) {
			result = await Product.find(
				{
					$or: [
						{ name: new RegExp(search, 'i') },
						{ desc: { $elemMatch: { $eq: /${search}/i } } },
						{ quick_desc: /${search}/i },
					],
				},
				{ ...projection },
			)
				.limit(pagesize)
				.skip(pageIndex * pagesize - pagesize);
			pageTotal = await Product.find(
				{
					$or: [
						{ name: new RegExp(search, 'i') },
						{ desc: { $elemMatch: { $eq: /${search}/i } } },
						{ quick_desc: /${search}/i },
					],
				},
				{ ...projection },
			).count();
		}
		pageTotal = Math.ceil(pageTotal / pagesize);
		//console.log('57 ' + result, pagesize, pageTotal, pageIndex);
		return response.render('product/products', {
			product_list: result,
			search,
			pagesize,
			pageIndex,
			pageTotal,
		});
	} else {
		const result = await Product.find({}, { ...projection })
			.limit(pagesize)
			.skip(pageIndex * pagesize - pagesize);
		let pageTotal = await Product.find({}, { ...projection }).count();
		//console.log('24', result);
		pageTotal = Math.ceil(pageTotal / pagesize);
		//console.log('72 ' + result, pagesize, pageTotal, pageIndex);
		return response.render('product/products', {
			product_list: result,
			pagesize,
			pageIndex,
			pageTotal,
		});
	}
});
// @route GET products/api
// @decs get all product, return json
// @access public
productRouter.get('/api', async (request, response) => {
	//const result = await Product.find({}).limit(2).skip(1);
	const result = await Product.find({}, { name: 1 }).limit(2).skip(0);
	const total = await Product.find({}, { name: 1 }).count();
	response.json({ product: result, total: total });
});

// @route GET products/:id
// @decs get specific product
// @access public
productRouter.get('/:id', async (request, response) => {
	const result = await Product.find({ _id: request.params.id });
	// setTimeout(function () {
	// 	response.json({ product: result });
	// }, 3000);
	response.json({ product: result[0] });
});

// @route GET products/product-detail/:slug
// @decs get specific product with slug
// @access public
productRouter.get('/product-detail/:slug', async (request, response) => {
	const product = await Product.find({ slug: request.params.slug });
	//get related product
	const query = {
		ancestor_categories: {
			$elemMatch: { $eq: product[0].parent_category },
		},
	};
	//console.log(query);
	const result = await Product.find(query);
	response.render('product/product_detail', { product_detail: product[0], product_list: result });
});

/**
 * @route GET products/product-detail/:slug
 * @decs get specific product with slug
 * @access public
 */
productRouter.get('/product-detail/:slug', async (request, response) => {
	const product = await Product.find({ slug: request.params.slug });
	//get related product
	const query = {
		ancestor_categories: {
			$elemMatch: { $eq: product[0].parent_category },
		},
	};
	//console.log(query);
	const result = await Product.find(query);
	response.render('product/product_detail', { product_detail: product[0], product_list: result });
});

// @route POST api/blogs/
// @decs Create new blog for test
// @access  public
productRouter.post('/', async (request, response) => {
	const product = new Product(request.body);
	//console.log(blog);
	try {
		let savedProduct = await product.save();
		response.status(201).json({ success: true, savedProduct });
	} catch (err) {
		//console.log(err);
		response.status(400).json({ success: false, message: err });
	}
});

// @route POST products/
// @decs Create new product
// @access authorization require
productRouter.post('/', middleware.tokenExtractor, async (request, response) => {
	if (!request.userId) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	const product = new Product(request.body);
	//console.log(product);
	if (!product.likes) {
		product.likes = 0;
	}
	try {
		const user = await User.findById(request.userId);
		product.user = request.userId;
		let savedproduct = await product.save();
		//console.log(user, savedproduct);
		user.products = user.products.concat(savedproduct.id);
		await user.save();
		response.status(201).json({ success: true, savedproduct });
	} catch (err) {
		//console.log(err);
		response.status(400).json({ success: false, message: err });
	}
}); //unedited
// @route DELETE products/:id
// @decs Implement functionality for deleting a single product resource.
//		Use the async/await syntax. Follow RESTful conventions when defining the HTTP API.
// @access authorization require
productRouter.delete('/:id', middleware.tokenExtractor, async (request, response) => {
	if (!request.userId) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	try {
		const user = await User.findById(request.userId);

		const productId = request.params.id;
		if (!productId) {
			return response.status(400).json({ message: 'Invalid product ID', success: false });
		}
		//logger.info(productId);
		let product = await Product.findById({ _id: productId });
		console.log(product, user);
		if (product.user.toString() === user.id.toString()) {
			await Product.findByIdAndRemove(productId);
			response.status(204).end();
		} else {
			response.status(401).json({
				error: 'You are not authorized to delete this product',
			});
		}
	} catch (error) {
		console.log(error);
		return response.status(401).json({ error: 'token missing or invalid' });
	}
}); //unedited
// @route PUT products/:id
// @decs Implement functionality for updating the information of an individual product post.
// @access authorization require
productRouter.put('/:id', middleware.tokenExtractor, async (req, res) => {
	if (!req.userId) {
		console.log('missing token');
		return res.status(401).json({ error: 'token missing or invalid' });
	}
	try {
		console.log(req.body);
		if (!req.params.id && !req.body.likes)
			return res.status(422).json({
				succeed: false,
				message: 'Cannot update this product. Check your update content!',
			});
		const product = {
			likes: req.body.likes,
		};
		const productId = req.params.id;
		if (!productId) {
			return res.status(400).json({ message: 'Invalid productId', success: false });
		}
		Product.findOneAndUpdate({ _id: req.params.id }, { likes: req.body.likes }, { new: true })
			.then((result) => {
				return res.status(200).json({ succeed: true, result });
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json({
					succeed: false,
					message: `Internal server error : ${err}`,
				});
			});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			succeed: false,
			message: `Internal server error : ${err}`,
		});
	}
}); //unedited

module.exports = productRouter;
