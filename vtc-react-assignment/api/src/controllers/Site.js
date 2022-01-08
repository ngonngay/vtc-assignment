const siteRouter = require('express').Router();
const Product = require('../models/product');

// @route GET /
// @decs get all product to append product category
// @access public
siteRouter.get('/', async (request, response) => {
	const pagesize = Number(request.query.pagesize) || 16;
	const pageIndex = request.query.page || 1;
	const projection = { name: 1, ancestor_categories: 1, price: 1, slug: 1, assets: 1 };
	const result = await Product.find({}, { ...projection })
		.limit(pagesize)
		.skip(pageIndex * pagesize - pagesize);
	let pageTotal = await Product.find({}, { ...projection }).count();
	//console.log('24', result);
	pageTotal = Math.ceil(pageTotal / pagesize);
	//console.log('72 ' + result, pagesize, pageTotal, pageIndex);
	return response.json({
		product_list: result,
		pagesize,
		pageIndex,
		pageTotal,
	});
});

// @route GET /contact
// @decs get contact page
// @access public
siteRouter.get('/contact', async (request, response) => {
	response.json('contact');
});
// @route GET /about
// @decs get about page
// @access public
siteRouter.get('/about', async (request, response) => {
	response.json('about');
});
// @route GET /blog
// @decs get blog page
// @access public
siteRouter.get('/blog', async (request, response) => {
	response.json('site/blog');
});

module.exports = siteRouter;
