const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

/** Every
Determine if every number is greater than or equal to 0
determine if every word shorter than 8 characters */

const areAnyEqualOrGreaterToZero = (values) => {
    return values >= 0;
}

console.log(nums.every(areAnyEqualOrGreaterToZero));


const checkIfWordShorterThanEightChars = (word) => {
    return word.length < 8;
}

console.log(panagram.every(checkIfWordShorterThanEightChars))


/** Filter
filter the array for numbers less than 4
filter words that have an even length */

const filterNumbersLessThanFour = (value) => value < 4

let filteredForFour = nums.filter(filterNumbersLessThanFour);

console.log(`Numbers less than four: ${filteredForFour}`);


const filterEvenLengthWords = (value) =>  value.length % 2 === 0

let filteredForLength = panagram.filter(filterEvenLengthWords)

console.log(`Words with even number of characters: ${filteredForLength}`)

/**  Find
Find the first value divisible by 5
find the first word that is longer than 5 characters */

const findFirstValDivisibleByFive = (inputVal) => inputVal % 5 === 0

let firstDivisibleByFive = nums.find(findFirstValDivisibleByFive)

console.log(`First divisible by five: ${firstDivisibleByFive}`)


const findFirstLongerThanFive = (inputString) => inputString.length > 5

let firstLongerThanFive = panagram.find(findFirstLongerThanFive)
console.log(firstLongerThanFive)
// None of the words have more than five characters so this will return UNDEFINED using our dataset.

/** Find Index
find the index of the first number that is divisible by 3
find the index of the first word that is less than 2 characters long
*/

const isDivisibleByThree = (inputVal) => inputVal % 3 === 0

let itemDivisibleByThree = nums.findIndex(isDivisibleByThree)

console.log(`Index of item: ${itemDivisibleByThree} Actual Item: ${nums[itemDivisibleByThree]}`)


const isShorterThanTwoChars = (inputString) => inputString.length < 2

let itemShorterThanTwoChars = panagram.findIndex(isShorterThanTwoChars)
// Returns -1 since all words in the array are longer than two characters.

if (itemShorterThanTwoChars < 0) {
    console.log(`All words are longer than two characters`)
} else {
    console.log(`Index of Item: ${itemShorterThanTwoChars} Actual Item: ${panagram[itemShorterThanTwoChars]}`)
}



/** For Each
console.log each value of the nums array multiplied by 3
console.log each word with an exclamation point at the end of it */

const multipliedArray = [];

nums.forEach(function(item) {
    multipliedArray.push( item * 3);
});

console.log(`Revised Array: ${multipliedArray}`)


const excitedArray = [];

panagram.forEach(function(item) {
    excitedArray.push(item + "!");
});

console.log(`Excited Array: ${excitedArray}`)

/** Map
make a new array of each number multiplied by 100
make a new array of all the words in all uppercase */


const arrayMultipliedBy100 = nums.map((num) => {
    return num * 100
})

console.log(`Multiplied Array: ${arrayMultipliedBy100}`)


const allUpperCase = panagram.map((item) => {
    return item.toUpperCase();
})

console.log(`Revised Panagram Array: ${allUpperCase}`)

/** Some
Find out if some numbers are divisible by 7
Find out if some words have the letter a in them */

const isDivisibleBySeven = (numToCheck) => numToCheck % 7 === 0

console.log(`Any items divisible by SEVEN? ${nums.some(isDivisibleBySeven)}`)


const hasAInTheWord = (inputWord) => inputWord.includes("a")

console.log(`Any items with letter A? ${panagram.some(hasAInTheWord)}`)

/** Hungry for More
 * 1. Calculate sum of nums array using reduce()
 * 2. Concatenate all the words using reduce()
 */

 const calculateSum = (runningTotal, inputVal) => runningTotal + inputVal

 console.log(`The sum of the NUMS array: ${nums.reduce(calculateSum)}`)

 const concatenateAll = (currentString, inputVal) => currentString + inputVal

 console.log(`The words strung together: ${panagram.reduce(concatenateAll)}`)

// original array remains unchanged.
 console.log(`original array: ${panagram}`)

 /** Sorting */
 /** 1.  Sort nums without any arguments 
  * NOTE:  this method changes the original array as per W3
 */

 console.log(`Sorted Nums: ${nums.sort()}`);
 // as expected, the ordering is correct. Looks like the method is treating these all like strings instead of numbers.

 // Let's try it again.  Sorting in descending order.

 console.log(`NUMS sorted descending: ${nums.sort(function(a,b){ return b-a})}`);

// sorting in ascending order.

 console.log(`NUMS sorted descending: ${nums.sort(function(a,b){ return a-b})}`);

 /** 2.  Sorting panagrams without any arguments */

 console.log(`Sorted Panagrams: ${panagram.sort()}`)
 // the capitalized word appears first, then the remaining words are in alphabetical order by first letter

//  sorting in descending order
console.log(`Panagram Sorted Descending: ${panagram.sort().reverse()}`)

/** Array Methods Challenge Problems *
 * 
 * /
 
 
/* const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
1.  isPanagram
* Panagram = sentence that contains at least one instance of every letter of the English alphabet.
BEGIN LOOP
    Make each item lowercase
    Get equivalent character code
    verify character code is within character codes for a-z (97 -> 122)
    if yes => push item into hash table with letter as the key
    else => do nothing
END LOOP
if number of items in the hash table == 26 => you have a panagram
*/



function checkIsPanagram(input) {
    var hash = {};
    
    for (var i=0; i<input.length; i++) { // LOOP through the array of words.
        for (let j=0; j < input[i].length; j++){ // loop through the letters of the word

        var ch = input[i].charCodeAt(j);

        if (ch >= 65 && ch <= 90) { // this is a substitute for using toLowerCase() on each.  Yes, I borrowed this logic.
            ch += 32; // take the uppercase code and 'convert' it to the corresponding lowercase code.
        }
        
        // Note, this ignores punctuation and focuses on lowercase letters.
        if (ch >= 97 && ch <= 122) {
            hash[ch] = hash[ch] ? hash[ch] + 1 : 1;
        }
        }
    }

    if (Object.keys(hash).length === 26) { // if we have 26 entries in our hash table, we've hit all the letters of the English alphabet.
        console.log('panagram');
    }
    else {
        console.log('not panagram');
    }
} 

checkIsPanagram(panagram)

const randomArray = ["always", "hello", "maybe"]

checkIsPanagram(randomArray)

const anotherPanagram = ['We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize']

checkIsPanagram(anotherPanagram)


