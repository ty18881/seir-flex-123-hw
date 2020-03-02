const express = require("express");
const router = express.Router();

const Product = require("../models/products.js");
const seedData = require("../models/seed_products.js");

/**
 * ROUTES go here
 * Copied from my original server.js
 */

 /**
 * NEW Route - display page where we enter data for new products
 */

router.get("/new", (req, res) => {
    res.render("new.ejs");
});

/**
 * CREATE - store new item in the datastore
 */

 router.post("/", (req, res) => {
     Product.create(req.body, (error, result) => {
         res.redirect("/products");
     })
 })

 /**
  * SEED ROUTE
  */
 router.get("/seed", (req,res) => {
    Product.insertMany(seedData, (err, products) => {
        if (err) { 
            console.log(`Error Seeding the Database: ${err}`);
        } else {
            console.log("Added product data provided", products);
            console.log(products);
        }
        res.redirect("/products");
        
    });
 });

/**
* SHOW Route
*/

router.get("/:id", (req, res) => {
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

 router.delete("/:id", (req, res) =>{
     console.log("Hitting the Delete route");
     Product.findByIdAndRemove(req.params.id, (err, prodData) =>{
         res.redirect("/products");
     });
 });

 /**
* BUY Route - decrease quantity in inventory each time button is pressed
* 1.  update quantity in database
* 2. Display new quantity on screen.
* + if quantity == 0 => display OUT OF STOCK, remove BUY button
*/

router.put("/:id/buy", (req,res) => {
   console.log(`In the Update Quantity route: Body = ${req.body}`);
   console.log(`ID: ${req.params.id}`);
   // RECALL:  req.body is empty here.  
   // so we cannot pull values from it to push a specific quantity 
   // back into the database.
       
   Product.findByIdAndUpdate(
       req.params.id,
       // this increments the quantity by -1 which means we subtract one from it's value.
       // not sure why they don't have $dec to decrement numbers.  Oh well.    
       { $inc: {qty: -1}},
       (error, result) => {
           console.log(error);
          res.redirect(`/products/${req.params.id}`);
       }
   )
});

/**
 * UPDATE/EDIT  - Displays page where we can edit a product
 */

 router.get("/:id/edit", (req, res) => {
     Product.findById(req.params.id, (err, foundProduct) => {
         res.render("edit.ejs", {
             product: foundProduct
         });
     });
 });

 /**
  * PUT Route - Store changes in the database.
  */

  router.put("/:id", (req, res) => {
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

router.get("/", (req, res) => {
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





// export this so we can reference the router in server.js
module.exports = router;