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


/**
 * INDEX Route - show all products
 */

 app.get("/products", (req, res) => {
     Product.find( {}, (error, allProducts) => {
         res.render("index.ejs", {
             prodList: allProducts
         });
     });
 });

 /**
  * SEED route - add entries to the database
  * FROM file ----
  * const seedData = require('./models/seed_vampires.js');
  * // Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) { console.log(err) }
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });
  */

 app.get("/products/seed", (req,res) => {
    Product.insertMany(seedData, (err, products) => {
        if (err) { 
            console.log(err)
        } else {
            console.log("Added product data provided", products);
            console.log(products);
        }
        
    });
 });

//   app.get("/products/seed", (req,res) => {
//       Product.create([
//         {
//             name: "Boogie Board",
//             description: "Boogie Board",
//             img: "placeHolder",
//             price: 50,
//             qty: 100
//         },
//         {
//             name: "Beach Wheelchair",
//             description: "Portable wheelchair suitable for beach use",
//             img: "placeHolder",
//             price: 150,
//             qty: 75
    
//         },
//         {
//             name: "Beach Wagon",
//             description: "Water-friendly wagon",
//             img: "placeHolder",
//             price: 25,
//             qty: 500
//         }

//       ], (err, data) => {
//         //   res.redirect("/products");
//         res.send(data);
//       });
//   })

/**
 * LISTENER
 */

 app.listen(port, () => {
     console.log("Mongoose Store Server Listening");
 });
