const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	hobbies: {
		type: String,
		required: true,
		maxLength: 20,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
