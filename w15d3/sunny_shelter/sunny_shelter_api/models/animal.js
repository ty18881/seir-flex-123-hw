const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  image: { type: String, default: 'https://loremflickr.com/240/120'},
  age: { type: Number, default: 0 },
  adopted: Boolean,
  personalityTraits: [{type: String}]
});

module.exports = mongoose.model("Animal", animalSchema);
