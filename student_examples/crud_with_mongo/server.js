/**
 * the standard stuff
 * 
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

const Fruit = require('./models/fruits.js');

/**
 * NEW route
 * 
 *  
*/

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

/**
 * CREATE route
 */
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    // res.send(req.body);
    Fruit.create(req.body, (error, createdFruit)=>{
        console.log(createdFruit);
        res.redirect("/fruits");
    });
});

/**SECRET - Database seed route */
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});

/**
 * SHOW Route
 */
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        // res.send(foundFruit);
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
});


/**
 * INDEX route
 */

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});





/** LISTENER */
app.listen(3000, ()=>{
    console.log('listening');
});
