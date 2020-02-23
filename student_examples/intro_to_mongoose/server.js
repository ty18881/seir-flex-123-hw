const mongoose = require("mongoose");

const Tweet = require("./tweet.js");

const mongoURI = "mongodb://localhost:27017/tweets";
// will automatically create tweets database if it doesn't already exist

const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * DB event listeners
 */

 // Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on("open", () => {
    console.log("Connection Made");
});

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(() => { db.close() }, 5000)

