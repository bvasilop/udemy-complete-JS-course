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

//***** Function Hoisting */
'use strict';
calculateAge(1980);

function calculateAge(year) { // in the creation phase of the execution context (in this case the global execution context),
    // the function declaration calculateAge is stored in the variable object before the code is executed. This is why when
    // we execute the code, the calculateAge function is already available even though it comes after the function call
    console.log(2016 - year);
}

// Function expressions in hoisting
// retirement(1990); // script.js:68 Uncaught TypeError: retirement is not a function

var retirement = function(year) { // Does not work in this example  because this function is not a function declaration
    // but instead a function expression. Hoisting with functions only works with function declarations and not with
    // function expressions.
    console.log(65 - (2016 - year));
};

//***** Variable Hoisting */
console.log(age); // in creation phase of variable object, the code is scanned for variable declarations then the variables are
// set to undefined. it returns undefined because we do have an age variable it just doesn't have a value yet. Variables that
// don't have a value yet will always have the data type undefined
var age = 23;
console.log(age);

function foo() {
    console.log(age); // // undefined
    var age = 65;
    console.log(age); // 65 // the variable object age here is stored in the global execution context object(var age = 65)
}
foo();
console.log(age); // 23 // foo function here gets its own execution object in which we can also store an age variable
// that can read the same name. Basically each use of age gets its own variable object

// Most important use case for hoisting is: what makes hoisting powerful is we can use it with function declarations even
// before we declare them in our code


///////////////////////////////////////
// Lecture: Scoping

// Scoping answers the question "where can we access a certain variable ?"

// In Javascript, each new function creates a scope which is a space/environment in which the variables it defines
// are accessible. In Javascript, the only way we have a new scope is to write a new function.

// Lexical scoping: a function that is lexically (written) within another functions gets access to the scope of the outer
// function (parent function). It also gets access to the variables and functions that the parent functions define.

// First scoping example
var a = 'Hello!'; // blue is the global scope (default scope). the scope that is accessible everywhere
first(); // from all functions. here we have access to the global scope a as well as the first function
function first() { // in orange we have the scope of the first function which defines the variable b and the
        // second function which is the local scope not global scope. Thanks to lexical scoping, this scope has also
        // access to its parent scope and all the variables and functions that it defines. In this case, it's the global scope

    var b = 'Hi!';
    second();

    function second() { // scope of the second function
        var c = 'Hey!';
        console.log(a + b + c); // the a, b, c variables are not yet defined in this function except for c but since
        // it has access to the global scope of the function in which it sits lexically . When running in the JS engine
        // will not find var b in the current scope so it goes up and looks in the scope of its parent function and pulls
        // it from there. Same goes for variable a. var a is not found in the current scope or the parent scope so it goes
        // further up. All the way to the global scope. This is called (scope chain). If the JS engine can find the variable
        // anywhere, it throws an error and stops execution. This does not work backwards. The global scope will never
        // have access to the variables b and c unless we return the values from the functions.
        // locally scoped variables are not visible to their parent scopes. The scope chain only goes up not down
    }
}




// Example to show the difference between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // Hello!Hi!Hey! // It works because of the scoping chain. The second function
        // has access to the variables of the first function and of the global scope. This is because the second
        // function is written inside of the first which in turn is written inside of the global scope (lexical scoping).
    }
}


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() { // the second function has the ability to call the third function because of the
        //scope chain (global scope)
        var c = 'Hey!';
        third();
    }
}
    function third() { // since the third function is not in the scope of the second function then it can
        // not access variables b and c defined in the second and first functions. It can only access the
        // global variable a because the function is written in the global scope.
        //the third function sits in the global scope that is why the second function has access to it
    var d = 'John';
    // console.log(a + b + c + d); // b and c are not defined because they cannot be accessed. Execution stack is different
    // than the scope chain
}
// Execution stack is different than the scope chain.
// Execution stack is the order that functions are called in the stack

// Scope chain is the order in which functions are written in the code.
// Where they are lexically in the code. So the order in which functions are
// called does not determine the scope of the variables within these functions
// what determines the scope of variables is where the functions are written

// its execution context that stores the scope chain of each function in the variable object
// but they do not have an effect on the scope chain itself

// In this example, the order of the functions do not matter. What does matter is the that the
// third function is in a different scope than the second function as so it cannot access variable c
// the only variables that function three can access is var a and var d. Because of global and local scope
// scope chain of the function



///////////////////////////////////////
// Lecture: The this keyword

// creation phase of an execution context has 2 steps. Creation phase and Execution phase
// We talked about Object variable creation as well as scope chain creation. Both part of the creation
// phase

// The last stage of the creation phase is determining and setting the value of the "this" variable or keyword
// The "this" variable is a variable that each and every execution context gets and is stored in an execution context object
// So where does the "this" variable or keyword point ?

// Regular Function Call: the "this" keyword points at the
// global object(the window object, in the browser).(default)

// Method Call: the "this" variable points to the object that is calling the method

// ** The "this" keyword is not assigned a value until a function where it is defined is actually called

// Even though it appears that the "this" variable refers to the object where it is defined, the "this"
// variable is technically only assigned a value as soon as an object calls a method.

// The "this" keyword is tied to an execution context which is only created as soon as a function is called or invoked

// console.log(this); // global execution context // window object (default object)

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year); // 31
    console.log(this); // attached to window (global object) it's not a method so attached to window object
}

var john = { // the 'this' variable is the john object // 'this' keyword refers to the object that called the method (john object)
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() { // function expression and not function declaration
        console.log(this);
        console.log(2016 - this.yearOfBirth);

           /* function innerFunction() {
                console.log(this); // Window object
                    // rule: (even though it is written inside of a method) when a regular function is called ( not a method),
                    // the default function is the window object. The 'this' keyword no longer points to the john object, but instead the window object
            }
            innerFunction(); */
    }
};
john.calculateAge();

var mike = {
    name : 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // method borrowing // borrowing the method and function from above
                    // the 'this' variable becomes the mike object. ** The 'this' keyword only becomes something
                    // as soon as the method gets called **
mike.calculateAge(); // {name: "Mike", yearOfBirth: 1984, calculateAge: ƒ}





