const express = require("express");
const app = express();

const port = 3000;

// Middleware
app.use( (req, res, next) => {
    console.log("I run for all routes");
    // work is done, now continue with the route.
    next();
  });

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// public resources if needed

app.use(express.static("public"));

// Data source

const spendingData = require("./models/budget.js");

// INDEX route
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {spendingData: spendingData} );
});

// NEW route - POST to capture and store the data from the NEW route
app.post("/budgets", (req, res) => {

    
    console.log("request ", req.body);

    // standardize the data being pulled from the form.
    let newSpending ={};
    newSpending.date = req.body.date;
    newSpending.name = req.body.name;
    newSpending.amount = parseInt(req.body.amount);
    
    newSpending.tags = [];
    newSpending.tags.push(req.body.tags);
    
    newSpending.expense = req.body.expense;
    
    // if the item is an expense, set the amount to negative.
    newSpending.expense == "yes" ? newSpending.amount = 0 - newSpending.amount : newSpending.amount;
    spendingData.push(newSpending);
    
    console.log("updated spending list", spendingData);
    //  now we want to redirect user to the index route 
    // by default, redirect sends user to a get route.
    
    res.redirect("/budgets");
    
  });

// NEW route - renders form to collect the data
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
  });

// SHOW route
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {item: spendingData[req.params.id]} );
});





// Listener

app.listen(port, () => {
    console.log("Server listening on port",port);
});

