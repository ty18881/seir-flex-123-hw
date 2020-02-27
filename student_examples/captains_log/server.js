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
 * INDEX Route
 */

 app.get("/logs", (req, res) => {
    res.render("index.ejs");
 });
/** LISTENER */
app.listen(port, ()=>{
    console.log('listening');
});
