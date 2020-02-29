const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    description:  { type: String, required: true },
    img: String,
    price: { type: Number, default: 0 },
    qty: {type: Number, default: 0}
}, {timestamps: true});

// this tells mongoose what to name the new collection if/when it creates one.
const Product = mongoose.model('Product', productSchema);

module.exports = Product;