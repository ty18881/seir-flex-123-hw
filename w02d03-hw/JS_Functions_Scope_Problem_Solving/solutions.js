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
let myString = 'RaDaR';

 console.log(`Is ${myString} a palindrome?` );
 console.log(checkPalindrome(myString));