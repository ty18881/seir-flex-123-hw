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
 * EDIT route
 */
 
app.get("/pokedex/:id/edit", (req, res) => {
  
  let newIndex = parseInt(req.params.id, 10);

  res.render("edit.ejs", {
    // :id = pokemon.id NOT an easily castable array index.
        pokemon: pokemon[newIndex],
        index: req.params.id
  });
});

/**
 * UPDATE route
 * id: "001",
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    type: [
      "Grass",
      "Poison"
    ],
    stats: {
      hp: "45",
      attack: "49",
      defense: "49",
      spattack: "65",
      spdefense: "65",
      speed: "45"
    },
 *   misc: {
      sex: {
        male: "87.5",
        female: "12.5"
      },
      abilities: {
        normal: [
          "Overgrow"
        ],
        hidden: [
          "Chlorophyll"
        ]
      },
      classification: "seed pokemon",
      height: "2’04”",
      weight: "15.2",
      capturerate: "45",
      eggsteps: "5120",
      expgrowth: "1059860",
      happiness: "70",
      evpoints: [
        "1 Sp. Attack Point(s)"
      ],
      fleeflag: "34",
      entreeforestlevel: "10"
    }
 */

app.put("/pokedex/:id", (req, res) => {
  // capture the form parameters and save them into 
  // their respective places 
  // console.log(req.body);
    pokemon[req.params.id].misc.classification = req.body.classification;
    pokemon[req.params.id].misc.height = req.body.height;

    pokemon[req.params.id].misc.weight = req.body.weight;
    // type is an array.
    
    pokemon[req.params.id].type = req.body.type.split(",");
    
    pokemon[req.params.id].misc.abilities.normal = req.body.normal.split(",");
    pokemon[req.params.id].misc.abilities.hidden = req.body.hidden.split(",");
    res.redirect(`/pokedex/${req.params.id}`);
    // res.redirect("/pokedex");
});

 /**
  * NEW route
  */

 app.get("/pokedex/new", (req, res) => {
  res.render("new.ejs");
});

/**
 * CREATE route
 */

app.post("/pokedex/", (req, res) => {

  let numToAdd = parseInt(req.body.number);

  // if adding more than one item, redirect to the index page.
  // else redirect to the show page.
  // POTENTIAL ADD ON: - Highlight new items in a different color
  if ( numToAdd > 1){ // user specified more than one => go to index.
    maxReturned = maxReturned + numToAdd;
    res.redirect("/pokedex");
  }
  else if (numToAdd === 1) { // user specified exactly one => go to show
    maxReturned = maxReturned +1;
    res.redirect(`/pokedex/${maxReturned-1}`);
  }
  else { // user specified zero or a negative number to add => go to index
    res.redirect("/pokedex/")
  }
  
});


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
  res.render("show.ejs", { pokemon: pokemon[req.params.id], index: req.params.id });
});

  /**
   * LISTENER
   */

  app.listen(port, () => {
    console.log("Server listening on port",port);
});