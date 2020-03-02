/**
 * the standard stuff
 * 
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");

const port = 3000;
/** MIDDLEWARE */

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

/** Database connectivity */
mongoose.connect('mongodb://localhost:27017/basiccrud', { 
    useNewUrlParser: true,
    useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Product = require("./models/products.js");
const seedData = require("./models/seed_products.js");

// import the express router
const productsController = require("./controllers/products.js");

// any request for fruits route get directed to the fruitsController.
app.use("/products", productsController);

// public sources
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.redirect("/products");
  });

  /**
 * WILDCARD route
 * if you hit my server and the explicit route doesn't exist,
 * we'll take you to the INDEX route.
 */
// app.get("*", (req, res) => {
//   res.redirect("/fruits");
// });

/**
 * LISTENER
 */

 app.listen(port, () => {
     console.log("Mongoose Store Server Listening");
 });
