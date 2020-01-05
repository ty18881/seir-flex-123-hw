/** SECTION 2: Combining Datatypes */

/** 1.  CrayonBox object */

const crayonBox = {
    brand: "Crayola",
    size:  64,
    colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
}

console.log(crayonBox.colors[2]);

/** 2.  Bottle Object - nested objects */

const bottle = {
    size: "20oz",
    material: "plastic",
    cap: {material: "plastic", color: "white"}
}

console.log(bottle.cap.color);

/** 3.  Create an array called receipt that has at least one object in it.
 *  The inner objects should be items that have a name and a price. Log one of the properties of that inner object. */

 const receipt = {
     date: "1/4/2020",
     time: "14:05",
     store: 144,
     itemsPurchased: [
         { name: "milk",
         price: 4.29},
         { name: "bread",
         price: 2.50 },
         { name: "eggs",
         price: 3.75},
         {name: "cheese",
        price: 4.50}]
 }

 console.log(receipt.itemsPurchased[1].name)

 /** 4.  Create an array called apartmentBuilding that has an array as one of its elements, 
  * the inner array should be the names of the tenants. Log one of the elements of the inner array. */

  const apartmentBuilding = [
      "Brooklyn",
      ["Ramos", "Powell", "Roman", "Schneider"]
  ]

  console.log(apartmentBuilding[1][1])

  /** Combine objects, arrays, and functions more than one level deep */

  /**1.  Create a function knit that returns an object that has the following kinds of properties item:
   *  scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value). */

   const knit = () => {
       let theThing = { item: "scarf", length: "4 feet", color: "blue ombre"}
       return theThing
   }

   console.log(knit().color)

   /**2.  Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). 
    * Log one of the elements of that array. */

    const crayonSelector = () => {
        return crayonBox
    }
console.log(crayonSelector().colors[3])

    /** 3.  Create a function powerButton that returns a function called options - 
     * options should console.log a simple message like select a song. Call that inner function */

const options = () =>{
    console.log("What song can we play for you today?");
}

const powerButton = () => {
    return options();
}

powerButton();

/** Model a Vending Machine */
/* vendingMachine
 * location:  addressHere,
 * snacks: [ {name: "cheezIts", price: 1}, {name: "Doritos", price: 1}, {name: "Kind Bar", price: 2}]
 * const vend = (selection) => {
 * return snacks[selection]
 * }
 */

 const vendingMachine = {
     location: "11 W. 19th Street",
     snacks: [ {name: "cheezIts", price: 1}, {name: "Doritos", price: 1}, {name: "Kind Bar", price: 2}],
     vend: function (selection)  { 
         

        if (selection > this.snacks.length){
            return "Invalid Selection. Please try again!"
        }
        else {
            return this.snacks[selection]
        }
        
 }
};

 console.log(vendingMachine)

 console.log(vendingMachine.vend(2));
 console.log(vendingMachine.vend(4));

 /** Callbacks  */
 /** 1.  ADD Function - calculates the sum of two numbers
  * Check for value types of the arguments before calculating the sum. 
  * would the data type check be the callback?
  */
 const isNumber = (inputNumber) => typeof inputNumber === "number"


 const addNumbers = (input1, input2, callback) => {
     if (callback(input1) && callback(input2)){
         return input1 + input2;
     }
     else {
         return "One of your arguments is not a number."
     }
 }

 console.log(addNumbers(1, 2, isNumber))
 console.log(addNumbers(1, "2", isNumber))

  /** 2.  Make a function subtract that takes two arguments (numbers) and subtracts them */
  const subtractNumbers = (input1, input2, callback) => {
    if (callback(input1) && callback(input2)){
        return input1 - input2;
    }
    else {
        return "One of your arguments is not a number."
    }
}

console.log(subtractNumbers(2,4, isNumber))
console.log(subtractNumbers("2",4, isNumber))
console.log(subtractNumbers("input",4, isNumber))


/** 3.  Make a function multiply that takes two arguments and multiplies them */

const multiplyNumbers = (input1, input2, callback) => {
    if (callback(input1) && callback(input2)){
        return input1 * input2;
    }
    else {
        return "One of your arguments is not a number."
    }
}

console.log(multiplyNumbers(5,2,isNumber))
console.log(multiplyNumbers("5",2,isNumber))


/** 4.  Make a function divide that takes two arguments and divides them*/
const divideNumbers = (input1, input2, callback) => {
    if (callback(input1) && callback(input2)){
        return input1 / input2;
    }
    else {
        return "One of your arguments is not a number."
    }
}

console.log(divideNumbers(10,2,isNumber))
console.log(divideNumbers(15,2,isNumber))
console.log(divideNumbers("20",2,isNumber))

/** 5.  Make a function calculate that takes three arguments. 
 * Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
6.  Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
*  I think I covered this in the items above.
*/



/*
7.  Call calculate 4 times, each time using one of the operation functions you wrote 
*/
// Please see items 1-4 above.

/** Function Definition Placement */

// have to define the function before it can be called.
/* const bar = () => {
    console.log('bar here');
}

bar();

const foo = () => {
    console.log('foo here');
}

foo();
*/

/** Error Reading */
// Missing initializer in const declaration.  With the fat arrow syntax, 
// we need to have an = between foo and the ()
// Once you add the =, then we receive "Cannot Access 'foo' before initialization"
// basically, we're trying to call a function before it has been declared and that won't work because
// JS reads the file sequentially from top to bottom.


const foo = ()=>{
    console.log('hi');
}

foo();


