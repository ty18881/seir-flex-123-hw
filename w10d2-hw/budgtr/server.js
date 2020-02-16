const express = require("express");
const app = express();

const port = 3000;

// Middleware
app.use(express.urlencoded({extended: false}));

// public resources if needed

app.use(express.static("public"));

// Data source

const spendingData = require("./models/budget.js");

// INDEX route
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {spendingData: spendingData} );
});

// NEW route - renders form to collect the data
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
  });

// SHOW route
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {item: spendingData[req.params.id]} );
});

// NEW route - POST to capture and store the data from the NEW route
// app.post("/bakedgoods", (req, res) => {
//     // res.send("hi");
//     console.log(req.body);
    
  
//     // standardize the data being pulled from the form.
//     let newGoodie ={};
//     newGoodie.name = req.body.name;
//     newGoodie.price = req.body.price;
//     newGoodie.image = req.body.image;
//   // https://images-na.ssl-images-amazon.com/images/I/715J%2BKlb5fL._SX569_.jpg
//     bakedGoods.push(newGoodie);
    
//     console.log("updated goodie list", bakedGoods);
//     //  now we want to redirect user to the index route 
//     // by default, redirect sends user to a get route.
    
//     res.redirect("/bakedgoods");
    
//   });




// Listener

app.listen(port, () => {
    console.log("Server listening on port",port);
});

