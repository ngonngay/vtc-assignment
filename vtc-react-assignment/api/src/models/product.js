const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		desc: [
			{
				lang: { type: String },
				val: { type: String, required: true, maxlength: 500 },
			},
		],
		quick_desc: { type: String },
		slug: { type: String, slug: 'name', unique: true },
		price: { type: Number },
		sale: {
			salePrice: { type: Number },
			saleEndDate: { type: Date },
		},
		on_display: { type: Boolean, default: true },
		in_warehouse: { type: Number, default: 0 },
		brand: {
			id: { type: String },
			img: {
				src: { type: String },
			},
			name: { type: String, required: true },
		},
		view: { type: Number },

		parent_category: { type: String },
		ancestor_categories: [{ type: String }],
		tags: [{ type: String }],
		assets: {
			imgs: [
				{
					img: {
						height: { type: Number },
						src: { type: String, required: true },
						width: { type: Number },
					},
				},
			],
		},
		shipping: {
			dimensions: {
				height: { type: Number },
				length: { type: Number },
				width: { type: Number },
			},
			weight: { type: Number },
		},
		attrs: [
			{
				name: { type: String },
				value: { type: String },
			},
		],
	},
	{
		timestamps: true,
	},
);
productSchema.plugin(uniqueValidator);
productSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
productSchema.set('toObject', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
module.exports = mongoose.model('Product', productSchema);
