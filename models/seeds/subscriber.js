// store environment with dotenv
require("dotenv").config();
const mongoose = require("mongoose");
const subscribers = require("../subscriber");
//  err handling
const wipeAndSeed = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		await subscribers.deleteMany({});
		await subscribers.insertMany([
			{
				name: String,
				email: String,
			},
		]);

		console.log("Data Import Success");

		process.exit();
	} catch (error) {
		console.error("Error with data import", error);
		process.exit(1);
	}
};
wipeAndSeed();
