/*********************/
/* Subscriber Schema */
/*********************/
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: String,
	city: String,
	province: String,
	postalcode: String,
});

module.exports = mongoose.model("subscriber", subscriberSchema);
