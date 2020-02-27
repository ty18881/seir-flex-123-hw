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
 * NEW Route
 */

app.get('/logs/new', (req, res)=>{
    res.render('new.ejs');
    // res.send("new");
});

/** LISTENER */
app.listen(port, ()=>{
    console.log('listening');
});
