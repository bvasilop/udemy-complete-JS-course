// Everything is an Object: Inheritance and the Prototype Chain
// Object -Oriented -Programming

// Two types of Values : Primitives and Objects

// Primitives: Numbers, Strings, Booleans, Undefined, Null

// Everything else (is an object): Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Booleans

// OOP : Objects interacting with one another through methods and properties.
// Used to store data, structure applications into modules and keeping code clean.

// With help for Constructor functions, we can create as many instances of an object as we want.
// Constructor acts like a blueprint for other objects with the same properties

// Inheritance : When one object is based on another object. When one object gets access to another objects
// properties and methods. One objects inherits these properties and methods from another object.

// JS is a prototype based language. Inheritance works by using prototypes and the prototype chain.
// Each JS object has a prototype property which makes inheritance possible in JS.

// Prototype property of an object is where we put methods and properties that we want other objects to inherit.

// The Constructor's object prototype is not the prototype of the constructor's object prototype itself, but
// of all instances that are created through the blueprint of the original constructor object.
// The constructor's prototype property is the prototype of the first instance.
// The original constructor object is an instance of an even part of a bigger constructor with it's own properties.
// (The Object Object)
// Each object that we create is an instance of the Object Constructor which inherits a bunch of methods from the
// Object Constructor's properties (prototype chain)

// Prototype chain: Is what makes all of this inheritance possible. When we try to access a certain method or
// property on an object, JS will first try to find that method on that exact object. If it cannot be found,
// it will look in the Object's prototype, which is the prototype property of its parent (moving up in the chain)
// if method is still not there, i keeps going up the chain to find the method until there are no more
// prototypes to look into (null). Null is the only one that has no prototype and is therefore the final
// link in the prototype chain. In this case, (Undefined) is returned.

// The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL
// instances that are created through it.

/********************
 * Creating Objects using the Function Constructor
 */
/*
var john = { // Using Object Literal
    name: 'John',
    yearOfBirth: 1990,
    job : 'teacher'
};

var Person = function(name, yearOfBirth, job) { // Function Constructor (pattern for writing a blueprint)
this.name = name; // attach "this" to function of this particular execution context
this.yearOfBirth = yearOfBirth; // the 'this' variable is an object as well
this.job = job;
/*this.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}// added using the prototype property below on line 77
};*/

// when we use the 'new' operator, a brand new empty object is created. After that, the constructor function
// (Person) is called with the arguments we specify. Object is created then function is called. When we call a
// a new function, we create a new execution context that also has a this variable
// In a regular function call, the 'this' variable is applied to the global execution context. In this example
// of our function Constructor, having the 'this' variable pointing to the Global constructor would not be
// very useful. That's why we use the 'new' operator. It makes it so the the 'this' variable of the function
// points to the empty object that was created in the beginning by the 'new' operator.
// The 'new' variable points to the new Person variable (empty object), not to the Person variable


// We have to add all the methods and properties that we want to be inherited into the Constructor's prototype
// property
/*
Person.prototype.calculateAge = function() { // grab the prototype property from the function constructor and add the calculateAge method
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith'; // adds last name to all instances of constructor even though it wasn't added to constructor object
                        // but instead in the prototype property of the function constructor. So John, Jane, Mark inherit this property
// Adding methods to our objects


var john = new Person('John', 1990, 'teacher'); // how we create new objects using the constructor function
                                                    // Instantiation ( instance of the Person object )
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge(); // 28
jane.calculateAge(); // 49
mark.calculateAge(); // 70


console.log(john.lastName); // Smith
console.log(jane.lastName); // Smith
console.log(mark.lastName); // Smith

// Using the console to examine Objects created with the constructor function
console.log(john); /* Person {name: "John", yearOfBirth: 1990, job: "teacher"} // properties created in our new instance
                        job: "teacher"
                        name: "John"
                        yearOfBirth: 1990
                        __proto__: Object */ // the prototype of the 'john' object // Prototype property of the Person Constructor
/*
// comparison in console // john.__proto__ === Person.prototype // True
    // The prototype of john is the prototype property of the Person function Constructor
    // If you open the second level proto in the console, you get the __proto__ of the Object function Constructor (object Object)

// console-- john.hasOwnProperty('job'); // true for instance of its own property
// console-- john.hasOwnProperty('lastName'); // false because it is not john's own property but instead inherited from the prototype


// console-- john instanceof Person // true because it was created through Person function Constructor

// Proving almost anything is an Object
    // try in console --  var x = [2, 4, 6] /* console.info(x) (3) [2, 4, 6]
                                                                    0: 2
                                                                    1: 4
                                                                    2: 6
                                                                    length: 3 // length property we've used before stored here in this array instance
                                                                    __proto__: Array(0) */ // we see array function constructor properties available for array prototype
// x.length = 3 because the length property is stored in the               // we have access to all of the array methods because they are stored in the prototype chain (inheritance)
// array property


/**********************
 * Object.create methods
 */

// another way to create objects that inherit from a prototype

// 1. define an object that will act as the prototype
// 2. create a new object based on that very prototype

// using the object.create way instead of function constructor
/*
var personProto = { // no capital because it's not a function constructor
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto); // pass the object that we define to be the object prototype as args
john.name = 'John'; // the old way without using 'this'
john.yearOfBirth = 1990;
john.job = 'teacher'; // not ideal way of using object.create because of manually entering data for this object


// object.create accepts a second parameter
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

// The difference between object.create and Constructor pattern is that the object.create builds an object that inherits
    // directly from the one that we passed into the first argument while in the Function Constructor the newly created
        // object inherits from the Constructor's prototype property

// One of the biggest benefits of object.create is that it allows us to implement a really complex inheritance structure
    // in an easier way than function constructors because it allows us to directly specify which object should be a prototype.

// Most popular method is using the Function Constructor
*/
/*********************
 * Primitives vs Objects
 */

// Primitives: Numbers, Strings, Booleans, Undefined, Null
// Everything else (is an object): Arrays, Functions, Objects, Dates, Wrappers for Numbers,

// Big difference between Primitives and Objects is that variables containing Primitives actually hold that data inside of the
// variable itself.

// In Objects, variables associated with objects do not actually contain the object but instead they contain a reference to the place
// in memory where the object sits or where the object is stored. A variable declared as an object does have a real copy
// of the object, it just points to that object.

// Primitives

/*var a = 23; // 46 // was reassigned to 46
var b = a; // 23 // here we simply copied the value of a to b. when we changed a = 46 it did not affect the value of b
a = 46; // mutate var a to 46
console.log(a); // 46
console.log(b); // 23*/






// each of the variables hold their own copy of the data. They do not reference anything.

// Objects

/*var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1; // we don't actually create a new object here, no copy was created here. All we did was create a new reference
// which points to the new object. So the obj1 and obj2 variables both hold the reference that point
// to the exact same object in the memory
obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); // 30

// when we pass a primitive and an object into a function

/**********************
 * Functions
 */
/*var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) { // created a function that
	a = 30;
	b.city = 'San Francisco'; // the city in the object has changed from Lisbon to San Francisco
}
change(age, obj); // we pass the age variable holding a primitive and object variable holding a reference to an object into our function
// This function as it was invoked attempted to change the arguments that we passed into it.
console.log(age); // 27 // the primitive has remained unchanged
console.log(obj.city); // San Francisco // the city in the object has changed from Lisbon to San Francisco

// this shows us that when we pass a primitive into a function, a simple copy is created
// we can change a as much as we want and we can never affect the variable on the outside because it is a primitive
// but when we pass an object, it's not really the object that we passed but instead the reference of the object

// We do not pass an object into a function but instead only the reference that points to the object
// when we change the object inside of the function it is still reflected outside of the function

/*****************
 * First Class Functions: Passing Functions as arguments
 */

// A first class function is a function that was built with the intention of being passed around to other functions.
// It does one specific thing, does not have side effects, and is not intended to be called directly, but rather, to be used by ‘other functions.’

// Those ‘other functions’ which accept one of those ‘first class functions’ as an argument are called higher order functions. Higher order functions also might be functions that return a function.

// In a higher order function, when one of the parameters passed in is a function, that function is a callback function because it will be called back and used within the higher order function.

// A higher order function is named as such because when using a callback to perform an operation within itself, the function has a ‘higher’ purpose than a regular function. When it returns a function, it also has a ‘higher’ purpose.

// A function is an instance of the Object type because of that, a function behaves like any other object
// We can store functions in a variable
// we can pass a function as an argument to another function
// we can return a function from a function
/*********
 * 'use strict';
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {  // we pass the array and then we pass the function that calculates the array
	var arrRes = []; // create new empty array that we will fill and return or use later
	for (var i = 0; i < arr.length; i++) { // created function that loops over array
		arrRes.push(fn(arr[i])); // use push method to insert element at end of array // the result of calling our fn function
		// we pass the current element of our input array into the function // fn is callback function
	}
	return arrRes;
}
// callback functions are functions that we pass into functions that will then be called later. In this case fn

function calculateAge(el) { // receives el element and returns back age
	return 2016 - el;
}

function isFullAge(el) { // The 'el' parameter will take a value of arr[i]
    return el >= 18; // comparison operator // returns true or false
}

function maxHeartRate(el) { // pass generic el (element) as input
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el)); // age is el // Math.round method rounds to nearest integer
    } else {
        return -1;
    }
}
// using ternary return (el >= 18 && el <= 81 ? Math.round(206.9 - (0.67 * el)) : -1);

var ages = arrayCalc(years, calculateAge); // store function as variable ages so we can use it later
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages); // (5) [26, 51, 79, 11, 18] // was called 5 times and the calculateAge function pushed new values into array that we returned
console.log(fullAges); // (5) [true, true, true, false, true]
console.log(rates);
**********/

/******************
 * Functions returning Functions
 */

/****function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) { // anonymous function
            console.log(`${name}, can you please explain what UX design is?`);
        }
    } else if (job === 'teacher') { // variable teacher will now be teacher function
        // just like storing a function expression as a variable

        return function(name) {
            console.log(`${name}, what subject do you teach?`);
            }
    } else {
        return function(name) { // here we return an object that happens to be a function
            console.log(`Hello ${name}, what do you do ?`);
            }
        }
    }

var teacherQuestion = interviewQuestion('teacher'); // variable teacher will now be teacher function
            // just like storing a function expression as a variable
            // function that creates questions for teachers

teacherQuestion('John'); // John what subject do you teach?
// calling variable which is a function and put 'John' in it because this function accepts a (name) in it as an input

// With this method we can write one generic function and then create many more specific functions based on that generic function

var designerQuestion = interviewQuestion('designer');

designerQuestion('Jane'); // Jane can you please explain what UX design is?
designerQuestion('John');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark'); // different way of calling function
// will return a function and can call it right away
// works because it is evaluated from left to right
    // interviewQuestion('teacher') returns a function
    // then we call the function that was returned before with ('Mark)

***/

/*****
 * Immediately Invoked Function Expression (IIFE)
 */

// a function cannot be accessed from the outside scope because of the scoping chain

/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function() { // first use () parentheses, then write an anonymous function
    var score = Math.random() * 10; // because of IIFE, you cannot access the score variable from the outside
    console.log(score >= 5);
})(); // Then we invoke the function ()     // here we created data privacy

/*function () { // If you use it this way as an anonymous function,  the JavaScript parser will throw an error because
    // it will think this a function declaration (without a name). We basically have to trick the parser into thinking
    // we have a javascript expression and not a declaration. The solution is to wrap the whole thing into () parentheses

}*/

/*(function() { // in javascript, what is inside parentheses () cannot be a statement. Also if it was not parentheses, it
    // would never be called and never do anything and since it's not attached to a variable, nothing would ever happen

}); // ; is used because the parser thinks it's a function expression not a declaration

(function(goodLuck) { // first use () // using a parameter in an IIFE
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // passing 5 as the argument for the goodLuck parameter // can only call IIFE once because it's not assigned to a variable
        // used to create a new scope that is hidden from the outside scope. Where we can safely use variables that are not used outside
        // and don't interfere with variables that are available in our global execution context
*/

/************
 * Closures
 */

// An inner function always has access to the variables and parameters of its outer function,
    // even after the outer function has returned
// What makes closures interesting is even after a function returns and the execution context is gone,
    // the variable object is still there stored in memory and can be accessed
    // the current execution context has closed in on the outer variable object so that it can use it
        // that's why it's called a closure
// any function that uses a variable from outside the scope is a closure

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) { // anonymous function
        var age = 2018 - yearOfBirth;
            console.log(`${retirementAge - age} ${a}`);
    }
}

var retirementUS = retirement(66); // we store the returned function into a variable
retirementUS(1990); // pass yearOfBirth as argument and call // 38  years left until retirement
retirement(66)(1990); // immediately returns and calls a new function (date of birth) // 38  years left until retirement
//var retirement
console.dir();
















