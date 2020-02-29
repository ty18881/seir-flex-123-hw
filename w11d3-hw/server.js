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
 * NEW Route - display page where we enter data for new products
 */

 app.get("/products/new", (req, res) => {
     res.render("new.ejs");
 });

 /**
  * CREATE - store new item in the datastore
  */

  app.post("/products", (req, res) => {
      Product.create(req.body, (error, result) => {
          res.redirect("/products");
      })
  })

/**
 * SHOW Route
 */

 app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render("show.ejs", 
        {
            product: foundProduct
        });
    });
 });

 /**
  * DELETE Route - remove item from the datastore
  */

  app.delete("/products/:id", (req, res) =>{
      Product.findByIdAndRemove(req.params.id, (err, prodData) =>{
          res.redirect("/products");
      });
  });

 /**
  * UPDATE/EDIT  - Displays page where we can edit a product
  */

  app.get("/products/:id/edit", (req, res) => {
      Product.findById(req.params.id, (err, foundProduct) => {
          res.render("edit.ejs", {
              product: foundProduct
          });
      });
  });

  /**
   * PUT Route - Store changes in the database.
   */

   app.put("/products/:id", (req, res) => {
       Product.findByIdAndUpdate(
           req.params.id,
           req.body,
           {new: true},
           (err, updateModel) => {
               res.redirect(`/products/${req.params.id}`);
           }
       )
   })
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



/**
 * LISTENER
 */

 app.listen(port, () => {
     console.log("Mongoose Store Server Listening");
 });
