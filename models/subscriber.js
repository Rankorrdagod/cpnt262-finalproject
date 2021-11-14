const mongoose = require('./db')

const subscriberSchema = new mongoose.Schema({
	name: String,
	email: String,
});

module.exports = mongoose.model("subscriber", subscriberSchema);
