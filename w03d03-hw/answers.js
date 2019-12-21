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
