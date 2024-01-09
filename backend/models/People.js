///////////////////////////////
// MODELS
////////////////////////////////
const mongoose = require("mongoose");
const PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    title: {type: String, required: true}
  });
  
  const People = mongoose.model("People", PeopleSchema);
  
  module.exports = People
  