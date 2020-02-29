const express = require("express");
const router = express.Router();

const Fruit = require("../models/fruits.js");

/** Routes go below 
 * copied from our original server.js
 * No longer need /fruits in the route
 * since that's preprended automatically by the controller.
*/


// NEW
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });
  
  // CREATE
  router.post("/", (req, res) => {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true;
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, result) => {
      // res.send(result);
      res.redirect("/fruits");
    });
  });
  
  // INDEX
  router.get("/", (req, res) => {
    Fruit.find({}, (error, fruits) => {
      // res.send(fruits);
      res.render("index.ejs", { fruits });
    });
  });
  
  // SECRET SEED ROUTE
  router.get("/seed", (req, res) => {
    Fruit.create(
      [
        {
          name: "grapefruit",
          color: "pink",
          readyToEat: true
        },
        {
          name: "grape",
          color: "purple",
          readyToEat: false
        },
        {
          name: "avocado",
          color: "green",
          readyToEat: true
        }
      ],
      (error, data) => {
        console.log(data);
        res.redirect("/fruits");
      }
    );
  });
  
  /**
   * DELETE Route
   */
  
  router.delete("/:id", (req, res) => {
    console.log(req);
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
      // redirect to INDEX route upon successful deletion.
      res.redirect("/fruits");
    });
   });
  
  // SHOW
  
  router.get("/:id", (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
      res.render("show.ejs", {
        fruit: foundFruit
      });
    });
  });
  
  /**
   * DELETE Route
   */
  
   router.delete("/:id", (req, res) => {
    // res.send("deleting item");
  
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
      // redirect to INDEX route upon successful deletion.
      res.redirect("/fruits");
    });
   });
  
   /**
    * UPDATE/EDIT Route - Displays page to
    * accept updates
    */
  
    router.get("/:id/edit", (req,res) => {
      //res.send("Editing");
  
      Fruit.findById(req.params.id, (err, foundFruit) => {
          console.log(foundFruit);
          res.render("edit.ejs", {
            fruit: foundFruit
          });
      });
    });
  
  /**
   * PUT Route - saves any edits to the datastore
   */
  
   router.put("/:id", (req, res) =>{
     if (req.body.readyToEat === "on") {
       req.body.readyToEat = true;
     } else {
      req.body.readyToEat = false;
     }
  
    //  res.send(req.body);
    Fruit.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}, 
      (err, updateModel) => {
        // res.send(updateModel);
        res.redirect("/fruits");
      }
      )
   })
  
   module.exports = router;