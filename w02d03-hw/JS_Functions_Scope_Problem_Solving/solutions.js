/**
 * Week 2 Day 3 Homework - JS Function Drills
 */

/* Question 1:  Parameter vs. Argument */
// parameter is the input to a function
// argument is the actual value being passed to the function.

/**
 * Question 2:  Within a function, what is the difference between return and console.log?
 */
// Return represents the value (could be an object as well) that is returned from the function to the calling program.
// Console.log is used to print information to the console while the function is executing.

/**
 * Question 3: Function checkPalindrome 
 */

 const checkPalindrome = (inputString) => {
    //  to avoid case concerns, i'll convert input to all lowercase up front.
    let newInput = inputString.toLowerCase();

    
    let reverseNewInput = "";
// calculate the reverse of the original input.
    for (let char of newInput){
        reverseNewInput = char + reverseNewInput;
    }

    if (newInput == reverseNewInput){
        return true;
    } else { return false;}


 }

//  let myString = 'abba';
// let myString = 'Abba';
// let myString = 'RaDaR';
let myString = 'Borscht';


 console.log(`Is ${myString} a palindrome?` );
 console.log(checkPalindrome(myString));

 /**
  * Question 4:  Function sumArray
  */

  const sumArray = (inputArray) => {
     
    // check if input is an array, if not, return 0;  I read up on JS constructors since typeof on an array
    // returns "Object"

    if (inputArray.constructor === Array){

    // check if input array contains non-numeric input while iterating through to avoid multiple iterations through the array.
        let sumOfArray = 0;

        for (let num of inputArray){
            if (typeof num == "number"){
            
            sumOfArray = num + sumOfArray;
            } else {
                return 0;
            }

        }
        return sumOfArray;

        } else {
            return 0;
        }
        
    }
  console.log(sumArray([1,2,3,4,5,6]));
  console.log(sumArray([10,9,8,7,6,5]));
  console.log(sumArray(5));
  console.log(sumArray([10,9,8,7,6,"string"]));

/**
 * Question 5, step 1:  checkPrime - returns true if the input is a prime number, returns false if not.
 * Prime numbers are only divisible by 1 and itself.
 */