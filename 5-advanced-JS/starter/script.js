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
}*/ // added using the prototype property below on line 77
};

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
