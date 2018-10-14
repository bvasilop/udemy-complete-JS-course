/*****
 *
 * Let and Const
 */
'use strict';
// ES 5
var name5 = 'Jane Smith';
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

/********
 * Blocks and IIFE's
 */

// New way of creating IIFE's

// Previously we would use IIFE for data privacy
// ES 6 has newer much simpler way. Instead ES 6 uses a block since const and let are block scoped.

/*{                   // a block can be signified by using curly braces {}. Then create some code inside of them
    const a = 1;
    let b = 2;      // this block performs exactly like an IIFY
    var c = 3;     // if we use var here we have access to the variable outside of the block (function scoped)
}
console.log(a + b); // you het an error here because the values are not accessible outside of the block.
                        // the variables here are block scoped and not function scoped
console.log(c); // 3


// ES 5 way for IIFE
(function() {
    var c = 3;
})();

console.log(c);

/***************
 * Strings in ES 6
 */

// Template literals with back ticks `  `


let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n =`${firstName} ${lastName}`;
console.log(n.startsWith('J')); // true // ES 6 method for testing strings for starting  values
console.log(n.endsWith('th')); //true // ES 6 method for testing strings for ending and values
console.log(n.includes('S')); //true // ES 6 method for testing strings if they include values
console.log(`${firstName} `.repeat(5)); // John John John John John // ES 6 method for repeating strings

/****************
 * Arrow Functions =>
 */

const years = [1990, 1965, 1982, 1937]; // if variable won't change over time we use const

// ES 5
var ages5 = years.map(function(el) { // // using callback function and map method we have access to the current element
    // the current index and the entire years array.
    return 2016 - el; // gets stored into ages5 variable with the help of .map method
});
console.log(ages5); // (4) [26, 51, 34, 79]

// ES 6

let ages6 = years.map(el => 2016 - el); // much easier and cleaner way of using a callback function with one argument
// using .map we can have access to the current element, the current index and the array itself
    // we have argument (el ,  we have => arrow operator, then the return statement 2016 - el
    // we remove function keyword
    // we remove return keyword
    // we remove parentheses
    // we remove curly braces
    // all we need is the argument (), the => and what we have in the return statement
console.log(ages6); // (4) [26, 51, 34, 79]

// If we have more than one argument, we have to add parentheses ()

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`); // here we want to access the element and the index
// we can also have expressions in ${} like ${2016 - element}
console.log(ages6); // (4) ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]

ages6 = years.map((el, index) => { // if we need more than one line of code we use the curly braces
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`; // in this case we have to write out the return (keyword) statement
});
console.log(ages6); // (4) ["Age element 1: 28.", "Age element 2: 53.", "Age element 3: 36.", "Age element 4: 81."]

// 3 ways of writing arrow functions
    // 1) with one argument and one line of code (simplest form)---first example
    // 2) with a second argument and use of parentheses ()---second example
    // 3) if we add more lines code (more than one) we add curly braces {} and return (keyword) statement at the end

/*******************
 * Arrow Functions 2
 */

// biggest advantage of using arrow functions is that they share the surrounding "this" keyword
    // unlike normal functions, arrow functions don't get their own "this" keyword. They simply use the "this"
        // keyword of the function they are written in (Lexical "this" variable).

// ES 5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this; // using self to point to and store the 'this' variable and use in the rest of the function,
            // fixes the pointing to global object problem (workaround/hack to avoid this situation) where in this function we don't have access to the box5 object
                // why we use ES6 to avoid this hack
        document.querySelector('.green').addEventListener('click', function() { // is actually a function pointing to the global (window) object not a method (pointing to the box 5 object)
            var str = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe(); // This box number undefined and it is undefined (when using 'this') // This box number number 1 and it is green (when using 'self')

// reason it is undefined is because it is not reading the values in our object. In only the method call the 'this' keyword
    // actually points to that object, but in a regular function call, the 'this' keyword will always point to the global object.
        // which in the case of the browser, is the window object.

// The click me method is a function attached to an object (method)

// ES 6

// With arrow functions we share the surrounding 'this' keyword

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() { // can be replaced with arrow function (see ex below)

        document.querySelector('.green').addEventListener('click', () => { // we use () and => because we are using more than one argument
            let str = 'This box number ' + this.position + ' and it is ' + this.color; // in here we have a function that shares
            // the lexical 'this' keyword with its surroundings. The 'this' keyword now points to the object
            alert(str);
        });
    }
}
box6.clickMe(); // This box number 1 and it is green

// It is best practice to always use arrow functions when you need to preserve the values of the 'this' keyword (like in this ex) but beware
    // if the 'this' keyword points to the global object instead of intended object when using arrow functions

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { // this method now shares the lexical 'this' keyword with its surroundings (global context) (undefined errors like ex 1)
        // no longer has its own 'this' keyword. Shares the global 'this' keyword (window object)

        document.querySelector('.green').addEventListener('click', () => { // we use () and => because we are using more than one argument
            let str = 'This box number ' + this.position + ' and it is ' + this.color; // in here we have a function that shares
            // the lexical 'this' keyword with its surroundings. The 'this' keyword now points to the object
            alert(str);
        });
    }
}
box66.clickMe(); // This box number undefined and it is undefined
*/

// Using function constructor with arrow functions

function Person(name) {
    this.name = name;
// add a method to the prototype property of the person so the object created through
    // the Person function constructor inherits this method
}
// ES 5
Person.prototype.myFriends5 = function(friends) {
    // var self = this; // can use same hack as before storing the 'this' variable in self to point to the object

    // we can also use call, bind and apply
    var arr = friends.map(function(el) { // we get undefined error for name because as before
            // the 'this' variable points to the global window object
        return this.name + ' is friends with ' + el; // el is the current element
    }.bind(this)); // we can create a copy of this function with the bind method and pass a manually defined 'this' keyword into it which now points to the new Person
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES 6

Person.prototype.myFriends6 = function(friends) {

    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    // we share the lexical 'this' keyword with our surroundings (the method above)
    console.log(arr);
};

new Person('Mike').myFriends6(friends); // (3) ["Mike is friends with Bob", "Mike is friends with Jane", "Mike is friends with Mark"]


/******************
 * Destructuring
 */

// ES 5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES 6

// we can destructure a data variable like this:

const [name, age] = ['John', 26]; //syntax on the right we 'construct' the data structure. On the left we destruct the data structure
console.log(name);
console.log(age);

const obj = {
    firstName2: 'John',
    lastName2: 'Smith'
};

const {firstName2, lastName2} = obj;
console.log(firstName2); // John
console.log(lastName2); // Smith

const {firstName2: a, lastName2: b} = obj;
console.log(a); // John
console.log(b); // Smith

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2); // 28
console.log(retirement); // 37

