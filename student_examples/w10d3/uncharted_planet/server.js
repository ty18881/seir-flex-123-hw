/**
 * STANDARD REQUIREMENTS
 */

const express = require("express");
const app = express();

// include the method-override package
const methodOverride = require("method-override");
const port = 3000;
/**
 * MIDDLEWARE
 */

app.use( (req, res, next) => {
    console.log("I run for all routes");
    // work is done, now continue with the route.
    next();
  });

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// use method-override; required to activate our delete form.
app.use(methodOverride("_method"));

/**
 * PUBLIC RESOURCES
 */

app.use(express.static("public"));

/**
 * LOCAL STORAGE
 */

 let remoteTeam = [];

/**
 * INDEX route
 */

 app.get("/uncharted_planet", (req, res) => {
     //res.send("your index route is here");
     res.render("index.ejs", {scientists: remoteTeam});
 });

/**
 * EDIT route
 */

 app.get("/uncharted_planet/:id/edit", (req, res) => {
  res.render("edit.ejs", {item: remoteTeam[req.params.id], index: req.params.id});
 });

 /**
  * UPDATE route - saves the changes we captured 
  * as part of the EDIT route
  */

  app.put("/uncharted_planet/:id", (req, res) => {
      remoteTeam[req.params.id] = req.body;
      res.redirect("/uncharted_planet");
  });
/**
 * CREATE route - post to create scientists on the planet
 * and push them to the local array.
 */

 app.post("/uncharted_planet", (req,res) => {

    
    let newScientist = {};
    newScientist.name = req.body.name;
    newScientist.description = req.body.description;

    remoteTeam.push(newScientist);

    // res.send(remoteTeam);
    console.log(remoteTeam);
    res.redirect("/uncharted_planet");
 });

 /**
  * NEW Route - form to collect scientist data
  */

 app.get("/uncharted_planet/new", (req, res) => {
    res.render("new.ejs");
    // res.send("this is the new route");
  });

  /**
   * DELETE route
   */

   app.delete("/uncharted_planet/:id", (req, res) => {
        remoteTeam.splice(req.params.id, 1);
        res.redirect("/uncharted_planet");
   });

   /**
    * DELETE all route
    */
   app.delete("/uncharted_planet/", (req, res) => {
    remoteTeam = [];
    res.redirect("/uncharted_planet");
});

/**
 * ROOT route - avoid the "cannot get /" message
 */

 app.get("/", (req, res) => {
   res.redirect("/ncharted_planet/");
 })

 /**
  * LISTENER
  */

 app.listen(port, () => {
    console.log("Server listening on port",port);
});
