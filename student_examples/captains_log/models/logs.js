const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    entry:  { type: String, required: true },
    isShipBroken: {type: Boolean, default: true}
}, {timestamps: true});

// this tells mongoose what to name the new collection if/when it creates one.
const Log = mongoose.model('Log', logSchema);

module.exports = Log;