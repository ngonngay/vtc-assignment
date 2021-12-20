const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true, minLength: 3 },
	name: { type: String, required: true },
	status: { type: String },
	passwordHash: { type: String, required: true },
	shipping_address: { type: String },
	addresses: [
		{
			city: { type: String },
			district: { type: String },
			ward: { type: String },
			addresses: { type: String },
		},
	],
});
userSchema.plugin(uniqueValidator);
userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// the passwordHash should not be revealed
		delete returnedObject.passwordHash;
	},
});

module.exports = mongoose.model('User', userSchema);
