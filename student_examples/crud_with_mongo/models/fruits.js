const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

// this tells mongoose what to name the new collection if/when it creates one.
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;