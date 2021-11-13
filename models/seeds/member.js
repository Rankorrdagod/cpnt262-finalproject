// store environment with dotenv
require("dotenv").config();
const mongoose = require("mongoose");
const members = require("../member");
//  err handling
const wipeAndSeed = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		await members.deleteMany({});
		await members.insertMany([
			{
				name: "Isha Simran",
				profilePic: "./assets/images/ishapic.jpg",
				title: "Front-End",
				bio: "",
				github: "https://github.com/IshaSimran",
			},
			{
				name: "Devon Lipsius",
				profilePic: "",
				title: "Back-End Supporter",
				bio: "",
				github: "https://github.com/Nephy1",
			},
			{
				name: "Filora Turdi",
				profilePic: "",
				title: "",
				bio: "",
				github: "https://github.com/aeoyu",
			},

			{
				name: "Evan Burton",
				profilePic: "./assets/images/evanpic.jpg",
				title: "Back-End",
				bio: "Fill this in at some point",
				github: "https://github.com/Rankorrdagod",
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
