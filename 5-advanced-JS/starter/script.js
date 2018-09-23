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

