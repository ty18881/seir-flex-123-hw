/**
 * the standard stuff
 * 
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override");

const port = 3000;
/** MIDDLEWARE */

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

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

/**
 * DELETE route
 */

 app.delete("/logs/:id", (req, res) => {
     console.log(req);
     Log.findByIdAndRemove(req.params.id, (err,data) => {
         // redirect to INDEX route upon successful deletion.
         res.redirect("/logs");
     });
 });

 /** 
  * UPDATE/EDIT Route - display page to edit the log entry
  */

  app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log(foundLog);
        res.render("edit.ejs", {
            logEntry: foundLog
        });
    });
  });

  /**
   * PUT Route - Saves edits to the datastore
   */

   app.put("/logs/:id", (req, res) => {
       // when we console.log req.body the shipIsBroken field does not
       // appear in the output.
       console.log(req.body);
       console.log("After Edits on Screen", req.body.isShipBroken);
       // when I unclick on the edit page, req.body.shipIsBroken returns undefined
       if (req.body.isShipBroken === "on") {
           req.body.isShipBroken = true;
       } else {
            req.body.isShipBroken = false;
       }

       // update the item in the database
       // redirect to index upon successful update
       Log.findByIdAndUpdate(
           req.params.id,
           req.body,
           {new: true},
           (err, updateModel) => {
               res.redirect("/logs");
           }

       )
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
