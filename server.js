require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");

async function main() {
	await mongoose.connect(process.env.MONGO_URL);
	const app = express();

	app.use(express.static("public"));
	app.use("/api", api);

	// Handle 404 errors with middleware
	app.use((req, res) => {
		try {
			if (req.url.startsWith("/api")) {
				res.status(404).send({ error: "404 Not Found" });
			} else {
				res.status(404).redirect("/404.html");
			}
		} catch {
			res.status(404).send({ error: "404 Not Found" });
		}
	});

	const PORT = process.env.PORT || 3001;

	app.listen(PORT, function () {
		console.log(`Listening on port ${PORT}`);
	});
}
main();
