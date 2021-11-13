/******************/
/* Member Schema */
/******************/
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
	name: String,
	profilePic: String,
	title: String,
	bio: String,
	github: String,
});

module.exports = mongoose.model("member", memberSchema);
