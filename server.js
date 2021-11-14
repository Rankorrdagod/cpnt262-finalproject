const express = require('express')
const app = express()
const dotenv = require('dotenv').config()


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

/****************/
//Handle Routes
/****************/

const api = require('./routes/api.js')
app.use('/api', api)

/****************/
// Handle 404
/****************/
app.use(function(req, res) {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {
    res.status(404)
    res.send({error: 'File Not Found'})
  } else {  
    // else send HTML 404
    res.status(404)
    res.redirect("./404.html")  
  }
});

/****************/
// Start server
/****************/
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});





/*require('dotenv').config();
const express = require("express");
const api = require("./routes/api");
const mongoose = require("mongoose");




	await mongoose.connect(process.env.MONGO_URL)

	const app = express();
    // URL ENCODED IF SUBMITTED INFO IS FROM A TRADITIONAL FORM
  app.use(express.urlencoded({ extended: true }));
  // JSON IF DATA IS SUBMITTED AS JSON USING FETCH() OR SIMILAR
  app.use(express.json());

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

   // SUBSCRIBER POST
<<<<<<< HEAD
 app.post('/api/subscribers', function(request, response){
=======
 /*app.post('/subscribers', function(request, response){
>>>>>>> ff78713085ad64b385763e98ff7253cb3ed11da3
  const subscriber = new subscriber(req.body);

  subscriber.save(function(error, data){
    if(error){
      res.send('Problem submitting form. please try again.');
    }
    res.send('Thank you for subscribing!!');
  })
});*/



