// DEPENDENCIES
const express = require('express');
const app = express();

// PORT
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.get("/", (req, res) => {
    // res.render("./missions/index.ejs", {allMissions: marsMissions} );

    res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {allPokemon: pokemon} );

    // res.send(pokemon);
});

// LISTENER
app.listen(port, ()=> {
    console.log('Listening on port: ', port);
  })