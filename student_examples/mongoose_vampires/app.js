/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
/** using schema Vampire, insert records
 * into the document from the seedData collection
 */

// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) { console.log(err) }
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });

/**
 * Creating four data elements
 */

 /**
  * // add your code here to set up your schema
  // name is required.
  name: { type: String, required: true},
  title: String,
  // default to blonde
  hair_color: { type: String, default: "blonde"},
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  // min victims = 0
  victims: { type: Number, default: 0 }
  */
//  Vampire.create( {
//    name: "Benjamin",
//    title: "Count",
//    hair_color: "brown",
//    eye_color: "brown",
//    dob: new Date("1949-08-17"),
//    loves: [1],
//    location: "New York",
//    gender: "m",
//    victims: 0
//   }, (error, vampire) => {
//     if (error){
//       console.log(error);
//     } else {
//       console.log(vampire);
//     }
//     mongoose.connection.close();
//   });

  // Vampire.create( {
  //   name: "Daniel",
  //   title: "Count",
  //   hair_color: "brown",
  //   eye_color: "brown",
  //   dob: new Date("1968-02-12"),
  //   loves: ["chocolate", "Top Shot"],
  //   location: "New York",
  //   gender: "m",
  //   victims: 0
  //  }, (error, vampire) => {
  //    if (error){
  //      console.log(error);
  //    } else {
  //      console.log(vampire);
  //    }
  //    mongoose.connection.close();
  //  });

  //  Vampire.create( {
  //   name: "Cecilia",
  //   title: "Countess",
  //   hair_color: "brown",
  //   eye_color: "brown",
  //   dob: new Date("2008-09-16"),
  //   loves: ["chocolate", "nail polish", "making movies"],
  //   location: "New York",
  //   gender: "f",
  //   victims: 0
  //  }, (error, vampire) => {
  //    if (error){
  //      console.log(error);
  //    } else {
  //      console.log(vampire);
  //    }
  //    mongoose.connection.close();
  //  });
 
  //  Vampire.create( {
  //   name: "Tara",
  //   title: "Empress",
  //   hair_color: "black",
  //   eye_color: "brown",
  //   dob: new Date("1971-05-27"),
  //   loves: ["chocolate", "reading", "ice cream"],
  //   location: "New York",
  //   gender: "f",
  //   victims: 0
  //  }, (error, vampire) => {
  //    if (error){
  //      console.log(error);
  //    } else {
  //      console.log(vampire);
  //    }
  //    mongoose.connection.close();
  //  });

  /** SELECT by comparison */

  // select all female vampires

  // Vampire.find( {gender: "f"}, (error, vampires) => {
  //     console.log(vampires);
  // mongoose.connection.close();
  // });


  // Vampire.find( {victims: { $gt:500}}, (error, vampires) => {
  //     console.log(vampires);
  //     mongoose.connection.close();
  // });

  
  // Vampire.find( {victims: { $lte:150}}, (error, vampires) => {
  //     console.log(vampires);
  //     mongoose.connection.close();
  // });

  
  // Vampire.find( {victims: { $lt:500, $gt:150 }}, (error, vampires) => {
  //     console.log(vampires);
  //     mongoose.connection.close();
  // });

  /**
   * SELECT by exists or does not exist
   */

  //  Vampire.find( {title: { $exists: true}}, (error, vampires) => {
  //     console.log(vampires);
  //     mongoose.connection.close();
  //  });

//    Vampire.find( {victims: { $exists: false}}, (error, vampires) => {
//     console.log(vampires);
//     mongoose.connection.close();
//  });

// return items that have a title and zero victims
// Vampire.find( {$and: [{title: {$exists: true}}, {victims: {$eq: 0}} ]}, (error, vampires) =>{
//   console.log(vampires);
//   mongoose.connection.close();
// });

// have victims and the number of victims are greater than 1000

// Vampire.find( {$and: [{victims: {$exists: true}}, {victims: {$gt: 1000}} ]}, (error, vampires) =>{
//   console.log(vampires);
//   mongoose.connection.close();
// });

// loves frilly shirtsleeves or frilly collars
// Vampire.find( {$or: [{loves: {$in: ["frilly shirtsleeves", "frilly collars"]}} ]}, (error, vampires) =>{
//   console.log(vampires);
//   mongoose.connection.close();
// });

// loves brooding
// Vampire.find(  {loves: {$in: ["brooding"]}}, (error, vampires) =>{
//   console.log(vampires);
//   mongoose.connection.close();
// });

/**
 * LOVES at least one of the following
 * appearing innocent
 * trickery
 * lurking in rotting mansions
 * R&B Music
 */
// Vampire.find(  {loves: {$in: ["appearing innocent", "trickery", "lurking in rotting mansions", "R&B Music"]}}, (error, vampires) =>{
//     console.log(vampires);
//     mongoose.connection.close();
//   });


/**
 * LOVES
 * fancy cloaks but NOT if they also love top hats or virgin blood
 * 2020.02.25 - Need to fix this syntax.  [ are in the wrong place]
 */
Vampire.find( $and [{loves: {$in: ["fancy cloaks"]}] {loves: {$nin: ["top hats", "virgin blood"]}}, (error, vampires) =>{
  console.log(vampires);
  mongoose.connection.close();
});

