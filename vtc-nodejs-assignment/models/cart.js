const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const cartSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		status: { type: String },
		quantity: { type: Number },
		total: { type: Number },
		products: [
			{
				id: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Product',
					require: true,
				},
				quantity: { type: Number, require: true },
				title: { type: String },
				price: { type: Number, require: true },
				attrs: [
					{
						name: { type: String },
						value: { type: String },
					},
				],
			},
		],
	},
	{
		timestamps: true,
	},
);
cartSchema.plugin(uniqueValidator);
cartSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
cartSchema.set('toObject', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
module.exports = mongoose.model('Cart', cartSchema);
