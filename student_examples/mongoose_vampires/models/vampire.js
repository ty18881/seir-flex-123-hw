const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
  // name is required.
  name: { type: String, required: true},
  title: String,
  // default to blonde
  hair_color: { type: String, default: "blonde"},
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  // min victims = 0
  victims: { type: Number, default: 0 }
});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
