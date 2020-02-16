const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: false}));

// public resources if needed

app.use(express.static("public"));

// Data source

const spendingData = require("./models/budget.js");

// INDEX route
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {spendingData: spendingData} );
});

// Listener

app.listen(port, () => {
    console.log("Server listening on port",port);
});

