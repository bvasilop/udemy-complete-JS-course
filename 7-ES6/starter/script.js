/*****
 *
 * Let and Const
 */
'use strict';
// ES 5
/*var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller'; // mutated variable
console.log(name5);

// ES 6

// const is for constants (values) we don't want to change
// let is like the old var --- values we do want to change or mutate later on

const name6 = 'Jane Smith'; // immutable variable --non-changing value over time
let age6 = 23; // use let if we want to change the variable
// name6 = 'Jane Miller';
// console.log(name6); // Uncaught TypeError: Assignment to constant variable.

// functions declared with var are (function scoped) while functions declared with const and let are (block scoped)
*/
// ES 5
function driversLicense1(passedTest) {

    if (passedTest) {
        console.log(firstName); // suppose we try to use it before we declare or define? // we get undefined // in execution context, all variables are hoisted and set to undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`); // works because of function scoping (hoisting)
    }

    // console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`); // does not work because it is outside of function
}
driversLicense1(true);

// ES 6

function driversLicense2(passedTest) {
       // console.log(firstName); // cannot use here // Uncaught ReferenceError: firstName is not defined at driversLicense
        // we cannot use the variable at all until it is declared
        // happens because of temporal dead zone. Means variables are hoisted but cannot be accessed until they are declared and defined
        let firstName; // declared function outside of block but didn't define it's value

    if (passedTest) {
        firstName = 'John'; // defined value inside of block // then we can use outside of block just like functions in ES5
        const yearOfBirth = 1990;
        console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`); // works because it is inside of block
    }
    // console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`); // does not work because of block scoping // since it's
        // outside of the block, we no longer have access to the variables using let and const
}
driversLicense2(true);

// A block is all the code that is wrapped between curly braces {} --- if statement , for block or while block, we're actually creating a new block
// variables that are declared with let and const are only accessible by the code that is inside the same block

// variables declared with var are only accessible inside of the function but not from the outside


let i = 23;
for (let i = 0; i < 5; i++) {
console.log(i); // 0 1 2 3 4 // the reason (i) works here is because let i = 0 is used in block scope so it doesn't inherit let i = 23; // two completely different variables
} // it's like having var i inside of a function and var i outside of a function -- two completely different variables
console.log(i); // 23

/*var i = 23; // gets overwritten by the the var i = 0 below
for (var i = 1; i < 5; i++) {
console.log(i); // 0 1 2 3 4
}
console.log(i); // 5 // because variables are not block scoped // we have the final i (5) from the counter variable above
*/

