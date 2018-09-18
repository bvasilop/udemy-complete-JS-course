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

// Execution Context
// -Execution Context Object (3 properties)
// --Variable Object (VO) --contains function arguments in variable declarations as well as function declarations
// --Scope Chain --contains current variable objects as well as the variable objects of all of its parents
// --"This" Variable --is applied as a reference to the current object
// When a function is called, a new execution context is placed on top of the new execution stack
//-(2 Phases)
// 1) The Creation phase.
//    a) Creation of the variable object (VO)
//    b) Creation of the scope chain
//    c) Determine value of the "this" variable
// 2) Execution phase
//    --code of the function that generated the current execution context is run line by line and all of the
// variables are defined. If it's the global context, then it's the global code that is executed

// The argument object is created, containing all the arguments that were passed into the function.

/******Lecture: Hoisting********/
// Code is scanned for function declarations: for each function, a property is created in the Variable Object,
// pointing to the function. (All the functions will be stored inside the variable object even before the code
// starts executing)

// Code is scanned for variable declaration: for each variable, a property is created in the Variable Object
// and is set to Undefined.

// Functions and variables are hoisted in javascript which means they are available before the execution phase
// actually starts. Except they are defined differently in hoisting. Functions are already defined before the
// execution phase starts while variables are set to undefined and will only be set in the execution phase. The
// execution phase comes immediately after the creation phase.
// Recap.. Each execution context has an object which stores a lot of important data that the function will use
// while it's running. This happens even before the code is executed.
















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









