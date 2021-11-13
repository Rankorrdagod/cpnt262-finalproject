require("dotenv").config();
const express = require("express");
const api = require("./routes/api");
const mongoose = require("./models/db")

async function main() {
<<<<<<< HEAD
	await mongoose.connect(process.env.MONGO_URL);
=======
	await mongoose;
>>>>>>> 4a1aaeb2cb6aa32c4067537089a327ecbb9b3170
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
