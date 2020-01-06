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

