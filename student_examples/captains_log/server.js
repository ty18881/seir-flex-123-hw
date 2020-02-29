/**
 * the standard stuff
 * 
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;
/** MIDDLEWARE */

app.use(express.urlencoded({extended:true}));

/** Database connectivity */
mongoose.connect('mongodb://localhost:27017/basiccrud', { 
    useNewUrlParser: true,
    useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

/**
 * MODELS
 */

const Log = require('./models/logs.js');
// const seedData = require("./models/seed_logs.js");

/**
 * NEW Route
 */

app.get('/logs/new', (req, res)=>{
    res.render('new.ejs');
    // res.send("new");
});

/**
 * CREATE Route
 */

app.post('/logs/', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){ //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true;
    } else { //if not checked, req.body.shipIsBroken is undefined
        req.body.shipIsBroken = false;
    }
    // res.send(req.body);
    Log.create(req.body, (error, createdLog)=>{
        if (error){
            console.log(error);
        } else {
            console.log('New Log entry: ', createdLog);
        }
        
        res.redirect("/logs");
    });
});


/** SHOW route
 * 
 */
app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      res.render("show.ejs", {
        logEntry: foundLog
      });
    });
  });

/**
 * INDEX Route
 */

 app.get("/logs", (req, res) => {
    Log.find( {}, (error, allLogs) => {
        res.render("index.ejs", {
            logs: allLogs
        });
    });
    
 });

 /**
  * SEED route - add a few log entries to the database
  */

//   app.get("/logs/seed", (req,res) => {
//     Log.create
//   });
/** LISTENER */
app.listen(port, ()=>{
    console.log('listening');
});
