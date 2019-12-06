// 2019.12.04 - Week 1, Day 2 Homework

// SECTION 1
// DRY = Don't Repeat Yourself 
// It's important because we want to avoid repititious code in our programs.
// Loops are one method we use ensure we have DRY code.

// Difference among const, let and var
// they are all used for variable declarations.
// const:  the identifier cannot be reassigned
// let:  variable declaration; the variable's scope is limited to the block in which it is declared.
// var:  variable declaration but scope can be global or local to an entire function.

// SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

/* 
a < b;
c > d;
'Name' == 'Name';
a < b < c;
a + a < d;
e !== 'Kevin';
48 !== '48';
f != e;
*/

console.log( a < b);
console.log( c > d);
console.log('Name' == 'Name');
console.log(a<b<c);
console.log(a+a < d);
console.log(e != 'Kevin');
console.log(48 !== '48');
console.log(f != e);

let g = 0;

console.log(g);

// chose let because we discussed how var was an older construct now falling out of favor.

k=0;
console.log(k);
// hmmm, we don't get an error if we skip the let/var/const declaration.

/*
10 = g;  This throws a syntax error at runtime

*/

/* Section 2 - Challenge - use only > , < and === to evaluate the expression to true

a_ (b || f) _ !f && e _ c

*/


// SECTION 3
/*
while (true) {
	console.log('Do not run this loop');
}

ANS:  This is an infinite loop because there's nothing in the code block to
change the value of the boolean expression.
*/

/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
    runProgram = false;
}

ANS:  This will generate an error at runtime because runProgram cannot be assigned a new value.

*/

let letters = "A";
let i = 0;

// iterate through the code block while the value of i is less than 20
while (i < 20) {
    // can we concatenate using this notation?  Maybe.
	letters += "A";
	i++;
}
// I suspect we can concatenate therefore, this will result in a row of 20 capital A printed
// on the screen.
console.log(letters);

// we actually got 21 capital A printed to the screen.

// SECTION 4

// Key differences between for and while loop
// 1. For loop runs a specified number of iterations.
// 2. Both can be infinite if the exit condition always evaluates to true

// First part of control panel:  let i=0
// Second part of control panel:  i < 100
// third part of control panel:  i++

for (let counter=0; counter <= 999; counter++){
    console.log( counter);
}

// SECTION 4 BONUS #1 - Backslash vs. Forward slash
// backslash can be used as an escape character so the special character in the string
// gets printed to the console.


// For loop in reverse
for (let decrement = 999; decrement >= 0; decrement--){
    console.log(decrement);
}

// for loop that prints current value to the console
let startValue = 10;
for (let k=1; k<=startValue; k++){
    console.log("The value of k is: "+ k + " of " + startValue);
}

// SECTION 4 BONUS #2 - For Loop that prints current value to console
// String Interpolation/Template Literals

let startValue2 = 10;
for (let k=1; k<=startValue2; k++){
    console.log(`The value of k is: ${k} of ${startValue2}`);
}

// Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
let swLength = StarWars.length;

for (let j=0; j< swLength; j++){
    console.log(StarWars[j]);
}

for (let z=0; z<swLength; z++){
    console.log(`${StarWars[z]} ${z}`);
}

// Iteration Bonus - Iterate over every second element in the array beginning at zero
for (let z=0; z<swLength; z+=2){
    console.log(`${StarWars[z]} ${z}`);
}

