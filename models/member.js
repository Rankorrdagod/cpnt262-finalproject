/******************/
/* Member Schema */
/******************/
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  profilePic: Image,
  title: String,
  bio: String,
  github: String
})

module.exports = mongoose.model('member', memberSchema)