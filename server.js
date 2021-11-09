require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");

mongoose
	.connect(process.env.MONGODB_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(function () {
		console.log("Connected to DB...");
	})
	.catch(function (err) {
		console.log(err);
	});
