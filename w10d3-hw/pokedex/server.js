const express = require("express");
const app = express();

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

 // Body Parser
app.use(express.urlencoded({ extended: false }));
// Load methodOverride to support update and delete routes
app.use(methodOverride("_method"));

// public sources
app.use(express.static('public'));

/**
 * Data source
 */

const pokemon = require('./models/pokemon.js'); 

/**
 * Working storage and variables
 */

 // limit the number of pokemon to 14 
 // while we are developing the solution.
 let maxReturned = 14;

 /**
  * INDEX route
  */

 app.get("/pokedex", (req, res) => {
    res.render("index.ejs", { pokemon: pokemon, max: maxReturned });
  });

/**
 * SHOW route
 */
app.get("/pokedex/:id", (req, res) => {
  res.render("show.ejs", { pokemon: pokemon[req.params.id] });
});

  /**
   * LISTENER
   */

  app.listen(port, () => {
    console.log("Server listening on port",port);
});