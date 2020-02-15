// DEPENDENCIES
const express = require('express');
const app = express();

// PORT
const port = 3000;

const pokemon = require("./models/pokemon.js");

// INDEX Views
app.get("/", (req, res) => {
    // res.render("./missions/index.ejs", {allMissions: marsMissions} );

    res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {allPokemon: pokemon} );

});

// SHOW Route
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {pokemon: pokemon[req.params.id]} );

});


// LISTENER
app.listen(port, ()=> {
    console.log('Listening on port: ', port);
  })