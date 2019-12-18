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
 * Prime numbers are only evenly divisible by 1 and itself.
 *
 */

 const checkPrime = (inputArg) => {
     let sqRoot = Math.sqrt(inputArg); 
     
        for (let i=2; i <= sqRoot; i++){

            if (inputArg % i === 0){
                return false;
            }
        }
     
// since primes are divisible by 1, starting the loop at 2 avoids wonky if-then-else statements in the loop
// if we haven't returned before now, then the input is a prime number.
     return inputArg > 1;
 }


 console.log(checkPrime(17));
 console.log(checkPrime(24));
 console.log(checkPrime(2));

 /**
  * Question 5, step 2:  printPrimes:  print all the prime numbers up to the value provided to the function.
  * 
  *
  */
 const printPrimes = (inputArg) => {
     for (let i = 0; i <= inputArg; i++){
        if (checkPrime(i)) console.log(i);
    }
 }

 printPrimes(10);
 printPrimes(22);
 printPrimes(48);

 /**
  * Question 6: Rock Paper Scissors
  */

  const randomMove = () => {
    //   eh, not the best option but it will work.
    let randNum = Math.floor((Math.random() * 100) +1);
    // console.log(`number selected is ${randNum}`);
    let choice = "paper"; // forcing a default value in case we get a prime number.
    
    if (randNum % 2 === 0 ) {
        choice = "rock";
    } else if (randNum % 3 === 0){
        choice = "paper";
    } else if ( randNum % 5 === 0){
        choice = "scissors";
    }
        
    // console.log(`${choice} is coming back`);
    return choice;
  }

// this is what i describe as the brute force method.  there's a more elegant way but my brain is fried.
  const rockPaperScissors = ( cMove, uMove) => {
      console.log(`Computer chose ${cMove}`);
      console.log(`User chose ${uMove}`);
// if computer chose rock
      if ( cMove ==="rock" && uMove === "scissors"){
        console.log(`${cMove} wins`);
      } else if (cMove === "rock" && uMove === "paper"){
        console.log(`${uMove} wins`);
      } else if ( cMove === "rock" && uMove == "rock"){
          console.log(`Its's a tie ${cMove} = ${uMove}`);
      }

    //   if computer chose paper
      if ( cMove ==="paper" && uMove === "rock"){
        console.log(`${cMove} wins`);
      } else if (cMove === "paper" && uMove === "scissors"){
        console.log(`${uMove} wins`);
      } else if ( cMove === "paper" && uMove == "paper"){
          console.log(`Its's a tie ${cMove} = ${uMove}`);
      }
      
// if computer chose scissors
    if ( cMove ==="scissors" && uMove === "paper"){
        console.log(`${cMove} wins`);
    } else if (cMove === "scissors" && uMove === "rock"){
        console.log(`${uMove} wins`);
    } else if ( cMove === "scissors" && uMove == "scissors"){
        console.log(`Its's a tie ${cMove} = ${uMove}`);
    }


      } // end of the function here.
  
/*
  rockPaperScissors("rock", "scissors");
  rockPaperScissors("rock", "paper");
  rockPaperScissors("rock", "rock");
*/
 
/** 
rockPaperScissors("paper", "scissors");
  rockPaperScissors("paper", "paper");
  rockPaperScissors("paper", "rock");
*/

/*
rockPaperScissors("scissors", "scissors");
  rockPaperScissors("scissors", "paper");
  rockPaperScissors("scissors", "rock");
*/

rockPaperScissors( randomMove(), randomMove());




  /**
  * Question 6, part 2: Rock Paper Scissors lizard spock
  * 
  */
// Work got busy and I ran out of time so I'm leaving this one for another time.
