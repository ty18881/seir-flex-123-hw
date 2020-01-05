/**Homework:  Jan 4, 2020 */
/** One Sentence about each of the below programming concepts */

/**DRY*/
// Don't repeat yourself - Avoid repeating similar code blocks across the program.  


/** KISS */
// Keep it simple stupid -  Write simple code, use simple constructs to ensure code is easier to troubleshoot and maintain.


/** Avoid creating a YAGNI */
// YAGNI = you aren't going to need it
// Don't include program logic until you really need it.  
// I struggle with this one the most.  For me, there's a push-pull between sequential logic and creating functions.
// My tendency is to stick to sequential code but sometimes that's not the simplest or cleanest approach.

/** Do the simplest thing that could possibly work */
// Don't get fancy when something straightforward will get the job done.

/** Don't make me think */
// Don't require folks to use a Rosetta Stone to understand what your code is supposed to be doing.

/** Write code for the maintainer */
// Please comment your code so we don't spend most of our time figuring out what is supposed to be happening.

/** Single responsibility principle */
// I translate this as "specialization."  A block of code should do one thing.

/** Avoid premature optimization */
// Don't go for perfect when it won't give you significant improvement.

/** Separation of concerns */
// Functions should specialize and not have overlapping responsibilities.


/** Commenting Code */

// function declaration, fat arrow notation
const f = l => {
    // initializing some variables within scope of the function.
    let es = 0, p = 0, c = 1, n = 0

    // LOOP:  
    while (c <= l) {
        // assigning n a value based upon the values of c and p.
        console.log(`C current value: ${c}`);
      n = c + p
      console.log(`N current value: ${n}`);
    //   I think this is an assignment statement but I'm not familiar with this syntax.
      [c, p] = [n, c]

      console.log(`++ C current value: ${c}`);
      console.log(`++ P current value: ${p}`);
      console.log(`++ N current value: ${n}`);
      es += (c % 2 === 0) ? c : 0

      console.log(`ES current value: ${es}`);
      console.log(`+++ C current value: ${c}`);
    }
    return es
  }

  console.log(f(55))
// this function adds the even fibonacci numbers up to the limit provided to the function.
// in this case, 2 + 8 +34 = 44

/** In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function */
// "addEvenFibNumbers" would be marginally better
// maybe variable names like currentFib, previousFib, nextFib, maxFib would increase readability of the code.

/** If you started a new job and your project was to expand the functionality of this function by allowing a second argument and 
 * then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2? */
// Start with f2 for sure.  

/** Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary? */
// The code executed in the same manner when I removed the semi-colon.





