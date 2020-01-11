/**Jan 4, 2020 Afternoon Work
 * Focus on Filter and Map methods
 */


const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]


  /**Filter the array for numbers less than 100 */

  const isUnder = (inputArray, boundary) => inputArray < boundary;

console.log(nums.filter(isUnder, 100));

    


