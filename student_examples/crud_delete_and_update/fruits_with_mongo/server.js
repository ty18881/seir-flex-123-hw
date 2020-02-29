const express = require("express");
const app = express();
const methodOverride = require("method-override");

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

// method-override to support the delete route.

app.use(methodOverride("_method"));
// note:  _method is what will be recognized.  Must match
// what's in your ejs file.

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/fruitsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const Fruit = require("./models/fruits.js");

// Routes:

// NEW
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE
app.post("/fruits/", (req, res) => {
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
app.get("/fruits", (req, res) => {
  Fruit.find({}, (error, fruits) => {
    // res.send(fruits);
    res.render("index.ejs", { fruits });
  });
});

// SECRET SEED ROUTE
app.get("/fruits/seed", (req, res) => {
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

app.delete("/fruits/:id", (req, res) => {
  console.log(req);
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    // redirect to INDEX route upon successful deletion.
    res.redirect("/fruits");
  });
 });

// SHOW

app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render("show.ejs", {
      fruit: foundFruit
    });
  });
});

/**
 * DELETE Route
 */

 app.delete("/fruits/:id", (req, res) => {
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

  app.get("/fruits/:id/edit", (req,res) => {
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

 app.put("/fruits/:id", (req, res) =>{
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
// Web server:
app.listen(3000, () => {
  console.log("listening");
});
