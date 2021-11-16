require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

const subscriberSchema = new mongoose.Schema({
	name: String,
	email: String,
});
const Subscriber = mongoose.model("subscriber", subscriberSchema);
module.exports = Subscriber;
