
const mongoose = require('./db')
const subscriberSchema = new mongoose.Schema({
	name: String,
	email: String,
});
const Subscriber = mongoose.model("subscriber", subscriberSchema);
module.exports = Subscriber;
