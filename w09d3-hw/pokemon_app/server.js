// DEPENDENCIES
const express = require('express');
const app = express();

// PORT
const port = 3000;


app.get("/", (req, res) => {
    // res.render("./missions/index.ejs", {allMissions: marsMissions} );

    res.send("Welcome to the Pokemon App");
});

// LISTENER
app.listen(port, ()=> {
    console.log('Listening on port: ', port);
  })