const express = require("express");
const router = express.Router();
const app = express()
const Gallery = require("../models/gallery");
const localGallery = require("../models/seeds/gallery");
const member = require("../models/member");
const members = require("../models/seeds/seed-members")
const subscriber = require("../models/subscriber");
const subscribers = require("../models/seeds/subscribers")
const mongoose = require('mongoose');

/*********************/
/* Route for gallery */
/*********************/

router.get("/galleries", async (req, res) => {
	try {
		let data = await Gallery.find();

		if (data.length === 0) {
			data = localGallery;
		} else {
			res.send(data);
		}
	} catch (err) {
		console.log(err);
		res.send({ error: "Gallery Not Found" }); // send JSON 404 error
	}
});

router.get("/galleries/:id", async (req, res) => {
	try {
		let data = await Gallery.findOne({ id: req.params.id });

		if (!data) {
			data = localGallery.find(
				(Gallery) => Number(req.params.id) === Gallery.id
			);
		}

		if (data) {
			res.send(data);
		} else {
			res.send({ error: "Gallery Doesnt Exist" }); // send JSON 404 error
		}
	} catch (err) {
		console.log(err);
		res.send({ error: "404 Not Found" }); // send JSON 404 error
	}
});

/*********************/
/* Route for members */
/*********************/

router.get("/members", async (req, res) => {
	try {
		let data = await member.find();

		if (data.length === 0) {
			data = members;
		} else {
			res.send(data);
		}
	} catch (err) {
		console.log(err);
		res.send({ error: "Member Not Found" }); // send JSON 404 error
	}
});

router.get("/members/:id", async (req, res) => {
	try {
		let data = await member.findOne({ id: req.params.id });

		if (!data) {
			data = members.find(
				(member) => Number(req.params.id) === member.id
			);
		}

		if (data) {
			res.send(data);
		} else {
			res.send({ error: "Member Doesnt Exist" }); // send JSON 404 error
		}
	} catch (err) {
		console.log(err);
		res.send({ error: "404 Not Found" }); // send JSON 404 error
	}
});

/*************************/
/* Route for subscribers */
/*************************/
router.get("/subscribers", async (req, res) => {
	try {
		let data = await subscriber.find();

		if (data.length === 0) {
			data = subscribers;
		} else {
			res.send(data);
		}
	} catch (err) {
		console.log(err);
		res.send({ error: "Member Not Found" }); // send JSON 404 error
	}
});


router.post('/subscribers', async (req, res) => {  
	try {
	  const subscriber = new Subscriber(req.body)
	
	  await subscriber.save()
	
	  console.log(subscriber)
	  res.redirect('/success.html')
  
	} catch(err) {
	  console.log(err)
	  res.redirect('/fail.html')    
	}
  })

module.exports = router;
