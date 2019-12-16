// Homework Assigned on December 11, 2019
// Week 2, Day 2 Afternoon Lab

/**Easy Does It */

let quotes = ["To be or not to be",
 "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "When you learn, teach. When you get, give."];

/** Random */

const randomThings = [1, 10,"Hello", true];

randomThings[2] = "World";

console.log(randomThings);

/** We've Got Class */

const ourClass = ["Outrun", "Zoom", "Github", "Slack"];
ourClass[2];
ourClass[2] = "Octocat";
ourClass[4] = "Cloud City";

console.log(ourClass);

/** Mix It Up */
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
// popping Egon off the array
myArray.pop();

// adding Bob Marley to front of the array
myArray.unshift("Bob Marley");

// removing the first item from the array aka Bob Marley
myArray.shift();

// reversing order of array elements
myArray.reverse();
console.log(myArray);

/**Biggie Smalls */

for (let i = 0; i < myArray.length; i++){
    if (myArray[i] < 100){
        console.log(`${myArray[i]} little number`);
    } else {
            console.log(`${myArray[i]} big number`);
        }
    }

/*{* Monkey in the Middle */

// let currNum = 6;
// let currNum = 3;
let currNum = 27;
if (currNum < 5){
    console.log("little number");
} else if (currNum > 10){
    console.log("big number");
} else {
    console.log("monkey");
}

/** What's in your closet */

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

/*   1. What's Kristyn wearing today?  Third item in her closet */

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

/** 2.  Remove her left shoe and store it in a variable named kristynShoe */ 

let kristynShoe = kristynsCloset.shift();
console.log(`removed ${kristynShoe} from the closet`);

// 3.  Add raybans to Kristyn's closet after yellow knit hat

// Assuming we know what position yellow knit hat is in the array
// pop off the last item in the closet which is right after the yellow hat
/*
let tempCloset = kristynsCloset.pop(); 

// push raybans into last postion of the closet behind the yellow hat
kristynsCloset.push("raybans");

// put the original last item back in the closet

kristynsCloset.push(tempCloset);

console.log(kristynsCloset);
*/

// alternate is to use splice() which I've never used before
kristynsCloset.splice(-1,0,"raybans");

console.log(`Using Splice this time ${kristynsCloset}`);

// Could also iterate through the array to locate the item but 
// maybe would still need pop, pop, push sequence to add the item.
// or iterate and use splice.

/* 4.  yellow knit hat becomes stained knit hat */

kristynsCloset[4] = "stained knit hat";
console.log(kristynsCloset);

/** 5. Put together an outfit for Thom - first element in the shirts array */

let thomsShirt = thomsCloset[0][0];
console.log(`${thomsShirt} is the first shirt in the closet`);

/** 6.  Access one item from Thom's Pants collection */

console.log(`${thomsCloset[1][1]}`);

/** 7.  One of Thom's accessories */

console.log(`${thomsCloset[2][2]}`);

/** 8.  Sentence about what Thom is wearing */

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

/** 9.  replace PJ Pants to Footie Pajamas - the quick way*/
thomsCloset[1][2]="Footie Pajamas";

console.log(thomsCloset);

/** HFM - 2D array - print numbers in order */
const twoDArray = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
  ];

  // Can we reverse a 2D array?
// the below command pulls twdDArray[2] to the first position, moves item in [0]
// to the [2] position and 
// reverses the elements within the new [0]
// [ [ 1, 2, 3 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]

//   let revArray = twoDArray.reverse();

  // then we reverse the individual 1D arrays
  let revFirstArray = twoDArray[0].reverse();
  let revSecondArray = twoDArray[1].reverse();
  let revThirdArray = twoDArray[2].reverse();

  

//    console.log(revFirstArray);

// console.log(`${revFirstArray} ${revSecondArray} ${revThirdArray}`);
// returns: 7,8,9 4,5,6 1,2,3

for (x of revThirdArray){
    console.log(`${x}`);
}

for (x of revSecondArray){
    console.log(`${x}`);
}

for (x of revFirstArray){
    console.log(`${x}`);
}

/** Spiral Path */
/* Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.

For example, if

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
then

spiral(array) # => [1,2,3,4,5,6,7,8,9]
It should work on any NxM array, so don’t assume the input is a square array. However, every row will have the same number of elements.
*/
// General logic I think
// traverse top row
// push each element into a 1D array
// traverse last column
// push each element into the 1D array
// traverse bottom row
// traverse first row (leftmost row)
// repeat with the second from the top row and around until
// all elements are gone.
// reverse the 1D array
// print the 1D array
// OR we could just create separate arrays, then reverse them, then print them out




  

