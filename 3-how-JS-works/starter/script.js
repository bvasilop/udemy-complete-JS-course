///////////////////////////////////////

// A javascript engine is a program that executes javascript code (GoogleV8, SpiderMonkey)

// Global Execution Context
// --is for code that is not inside any function
// --declaring a variable in the global object or window object in the browser window.
// --lastName === window.lastName // true  - assigning a variable globally automatically
// --applies it to the global window object

// Properties are just variables attached to objects

// Code that is inside a function
// -- Each time we call a function, we get its own brand new execution context
// -- var name = 'John' // global variable in a global context
// -- function first() {
//    var a = 'Hello';
//    second();
//    var x = a + name;
//    } // global function in a global context
// -- every time you call a new function, you get a new execution context
// -- each time you execute a new function it is added to the top of the execution stack
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the difference between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









