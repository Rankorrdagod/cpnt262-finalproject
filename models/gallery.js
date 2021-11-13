/*****************/
/* Gallery Schema*/
/*****************/
const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
	id: Number,
	title: String,
	description: String,
	width: Number,
	height: Number,
	imageSrc: String,
});
module.exports = mongoose.model("gallery", gallerySchema);
