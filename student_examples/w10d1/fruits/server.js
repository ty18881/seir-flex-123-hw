const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");

const fruits = [
    {
      name: "apple",
      color: "red",
      readyToEat: true
    },
    {
      name: "banana",
      color: "yellow",
      readyToEat: true
    },
    {
      name: "pear",
      color: "green",
      readyToEat: false
    }
  ];

// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));
// Load methodOverride middleware:
app.use(methodOverride("_method"));

app.get("/fruits/:id", (req, res) => {
    // const { id } = req.params;
    // res.send(fruits[req.params.id].name);
    res.render("show.ejs", {
      fruit: fruits[req.params.id],
      names: ["Dejay", "Ira"]
    });
  });

  app.get("/fruits", (req, res) => {
    res.render("index.ejs", { fruits: fruits });
  });
  

// EDIT
app.get("/fruits/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    fruit: fruits[req.params.id],
    index: req.params.id
  });
});
// UPDATE
app.put("/fruits/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits[req.params.id] = req.body;
  res.redirect("/fruits");
});