/**Datatypes question */

// 1.  Light Switch:  Boolean
// 2.  User's email address:  string
// 3.  Spaceship with various properties:  Object
// 4.  List of student names - Strings, Arrays
// 5.  List of student names with location - Strings, Arrays, Objects
// 6.  List of student names, location and list of favorite TV shows - Stringss, Array, Objects


/**Take it Easy */

// 1.  Array of all the colors of the rainbow

const rainbow = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet"
];

console.log(rainbow);

// 2.  Access Blue from the array

console.log(rainbow[4]);

// 3.  Object with information about me

const taraYoung = {
    favFood: "chocolate",
    hobby:  "reading",
    town:  "Brooklyn",
    favDatatype: "number"
};

console.log(taraYoung);

// 4.  Access the hobby 

console.log(taraYoung.hobby);

/**Crazy Object */

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }


//  1. Print "omg my mouth is burning" to the console
// taco is an array that contains two anonymous objects.

console.log(crazyObject.taco[1].salsa[5]);

// 2.  "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0]);


// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4.  "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);


// 5.  The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);


// 6.  Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");

console.log(crazyObject.larry.quotes);

/** Object-ception */

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

//  Change value of limbo to null

console.log(`Old value of limbo: ${inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo}`);

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(`New value of limbo: ${inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo}`);

/**Bond Films */

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

// 1.   Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];

for (let movie in bondFilms){
    bondTitles.push(bondFilms[movie].title);
}

console.log(bondTitles);

// 2.  Create a new array oddBonds, of only the Bond films released on odd-numbered years.

const oddBonds = [];
for (let movie in bondFilms){
    if (bondFilms[movie].year % 2 !== 0){
        oddBonds.push(bondFilms[movie]);
    }
    
}

console.log(oddBonds);

// 3.  Determine the total cumulative gross of the Bond franchise, and console.log the result. 
// hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

let totalGross = 0;
// must convert the gross value of each film into a number before adding.
// that means stripping off the $ and stripping out the commas, then converting to a number.

for (let movie in bondFilms){
    
    let currNum = parseInt(bondFilms[movie].gross.replace("$", "").replace(/,/g,""));
    
    // console.log(`Gross: ${currNum}`);
    totalGross = totalGross + currNum;
    
}

// Can I add the dollar sign and commas back in?  Yes, found this function on Stack Overflow
// it adds commas after every three numbers, EXCLUDING the numbers after the decimal point.
// regular expressions for the win!  
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// console.log(`Total Gross of Bond Films: ${totalGross}`);
// console.log("Total Gross: "+ numberWithCommas(totalGross));
console.log(`Total Gross: $ ${numberWithCommas(totalGross)}`);


/**Hungry for More - Return the object the represents the actor who has appeared in the fewest Bond films */

// Iterate through the array of Bond films.
// each time you see the actor, increment the actor's appearance count
// once done iterating, print object that corresponds to the actor with the lowest appearance count.

/** Set actorName = ""
 * Set actorCount = 0;
 * Begin iterating through the Bond film array
*   actorName = actor in the object we're examining
*   actorCount+=1;
*   push actorName and actorCount into an array (maybe in actorAppearances object??)
* When you are done creating the new actorFrequency array,
* iterate through that array to identify the fewest appearances.
* use that actor's name as a key back into the original bondFilms array 
* print the object that applies to that actor.
* Could we use a hash table here?  where actor name is the hash key and the value is the number of appearances?
* or maybe the film object is the hash key and number of appearance is the key?
*/

const actorFreq = [];
let freqCount = 0;
let currActor = "";




// for (let movie in bondFilms){

// scroll through the actorFreq array.  Compare the current actor with entries in the actorFreq array.
// If we find the actor in the actorFreq array, increment the appearance variable.
// If not, then add the actor to the actorFreq array and set appearance to one.

/* The below code doesn't work.  We end up in an infinite loop because one array is growing as we 
* attempt to test items within it.
        if (actorFreq === undefined || actorFreq.length == 0){
            actorFreq.push( {name: bondFilms[movie].actor, appearance: 1});
        }
        else {
        // for (let actor in actorFreq){
            for (let i=0; i< actorFreq.length; i++){
            
            if (actorFreq[i].name === bondFilms[movie].actor) {
                console.log(`Recognized the actor ${bondFilms[movie].actor}.  Incrementing the appearance count`);
                // console.log(`Already on the freq array:  ${bondFilms[movie].actor} to the frequency array`);
                actorFreq[i].appearance+=1; 
            } 
            else {
                console.log(`A new entry: Adding ${bondFilms[movie].actor} to the actorFreq array`);
                actorFreq.push( {name: bondFilms[movie].actor, appearance: 1});
                // console.log(`Actor Frequency array: ${actorFreq}`);
            }
     
        }
    */


    // actorFreq.push(bondFilms[movie].actor);
// }

/* I got stuck and ran out of time.
const actorFreq2 = [];
let currName = "";

for (let i=0; i <actorFreq.length; i++){
    if (actorFreq2 === undefined || actorFreq2.length == 0){
        actorFreq2.push( {name: actorFreq[i], appearance: 1});
        currName = actorFreq2[i];
    } else if (actorFreq[i] !== currName){
        actorFreq2.push( {name: actorFreq[i], appearance: 1});
        currName = actorFreq2[i];
    } else {
            // identify the record in actorFreq2, the update the appearance count.
            actorFreq[i].name

    }

    }
}

console.log(actorFreq);
*/
// console.log(Object.keys(bondFilms));  // Returns array of  index of each object in the bondFilm array. [0, 1, 2, 3, ...]
// how about keys of the keys??

// console.log(Object.keys(Object.keys(bondFilms)) );


