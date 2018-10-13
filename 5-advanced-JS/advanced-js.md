# JavaScript Interview Prep Questions

## Curried Function with Single Argument
    function tripleAdd(num1) { // curried function
	    return function(num2) { // return a function in a function
		return function(num3) { // return a function within another function
			return num1 + num2 + num3;
		};
	    };
    }

    function tripleAdd1(num1, num2, num3) { // regular declared function
	    return num1 + num2 + num3;
    }

    console.log(10, 20, 30);*/

    tripleAdd(10)(20)(30); // curried function
    tripleAdd1(10, 20, 30); // regular declared function

    //curried function with single arguments
    //curried means sequence of functions

## Curried Functions with multiple arguments
    function quadrupleAdd(num1) {
        return function(num2) { // return a function in a function
            return function(num3, num4) { // return another function with multiple arguments
                return num1 + num2 + num3 +num4;
            };
        };
    }
    quadrupleAdd(10)(20)(30, 40);

    //curried function with multiple arguments
    //curried means sequence of functions

### Curried Function Example 3
    function getTravelTime(distance, speed) {
        return distance / speed;
    }

    getTravelTime(600, 50);

    function getTravelTime(distance) {
        return function(speed) {
        return distance / speed;
        };
    }
    const getTravelTimeBosNyc = getTravelTime(400);
    const getTravelTimeMiamiAtlanta = getTravelTime(600);

    console.log(getTravelTimeBosNyc(50)); // 8
    console.log(getTravelTimeMiamiAtlanta(50)); // 12

## IIFE - Immediately Invoked Functions

* Main reason to use **IFFE** is to preserve a **private scope** for your function. You want to make sure you're not overwriting any **global variables**
*  **IIFE:** immediately invoked function expression
1. define function
2. then immediately call function by wrapping in ()
3. then invoke with another set of ()

        (function doubleNumber(num) {
            return num * 2;
        })(10);


        (function() {

        function getTotal(a, b) {
            return a + b;
        }

        var $ = 'currency';

        if (true) console.log('hello world');

        })();

### IIFE syntax

    (function() {

    })();

## Closures

### Example 1

    const globalVariable = 'global var';

    function outerFunc(param1) {
        const variable1 = 'var one';

    function innerFunc(param2) {
        const variable2 = 'var two';

        console.log('globalVariable: ', globalVariable); // globalVariable:  global var

        console.log('variable1: ', variable1); // variable1:  var one

        console.log('variable2: ', variable2); // variable2:  var two

        console.log('param1: ', param1); // param1:  param two

        console.log('param2: ', param2); // param2:  param one
    }
    innerFunc('param one');
    }
    outerFunc('param two');

### Example 2
 https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

 http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads

      const arr = [10, 12, 15, 21];
      for (let i = 0; i < arr.length; i++) {

      // using the ES6 let syntax, it creates a new binding every single time the function is called
      // read more here:
      setTimeout(function() {
          console.log('The index of this number is: ' + i);
      }, 3000);
      }

      // setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i

### Counter Function with Closure

 **Write a function that keeps track of how many times it was called and returns that number. All functionality should be inside of the function.**


    function myFunc() {
        for (let i=1; i<=20; i++) {
        return function (i) {
        };
      }
    }
---

    function myFunc() {
        let count = 0;
        return function() {
        count++;
        return count;
        };
    }

    console.log(myFunc()); //returns 1
    console.log(myFunc()); //returns 2
    console.log(myFunc()); //returns 3

---

    const instanceOne = myFunc();
    const instanceTwo = myFunc();
    const instanceThree = myFunc();


    console.log('instance one: ', instanceOne()); // instance one:  1
    console.log('instance one: ', instanceOne()); // instance one:  2

    console.log('instance two: ', instanceTwo()); // instance two:  1
    console.log('instance two: ', instanceTwo()); // instance two:  2

## *This* Keyword

    var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPricePerSquareFoot: function() {
        return this.price / this.squareFeet;
    }
    };

    console.log(house.price);
    console.log(house.getPricePerSquareFoot());

### original question

    var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPricePerSquareFoot: function() {
        return house.price / house.squareFeet;
        }
    };
    console.log(house.price);
    console.log(house.getPricePerSquareFoot());

## Hoisting
### Example 1

    console.log(color); // undefined

    var color = "blue";

    console.log(color); // blue



### Example 2

    var color;

    console.log(color); // blue

    color = "blue";

    console.log(color); // blue

### Example 3

    console.log(getProduct(2, 3)); // 6

    var getProduct = function(num1, num2) {
        return num1 * num2;
    };

    console.log(getProduct(2, 3)); // 6


### Example 4

    console.log(getProduct(2, 3)); // 6

    function getProduct(num1, num2) {
        return num1 * num2;
    }

### Example 5

    var globalVar = 'global';

    (function() {

    var name = 'Jen';

    var getAge = function() {
        return '30';
    };

    function getState() {
        return 'Delaware';
    }

    })();

## fizzBuzz

### Using if else Statements

    function fizzBuzz (num) {
        for (let i = 1; i <= num; i++) {
	    if (i % 15 === 0) {
		    console.log('FizzBuzz');
	    } else if (i % 3 === 0) {
		  console.log('Fizz');
	    } else if (i % 5 === 0) {
		    console.log('Buzz');
	    } else {
		    console.log(i);
	    }
      }
    }

    fizzBuzz(25);

### Using Switch Statements

    function fizzBuzz2(num) {
        for (let i = 1; i <= num; i++) {
        switch(true) {
        case (i % 15 === 0):
            console.log("Fizzbuzz");
            break;
        case (i % 3 === 0):
            console.log("Fizz");
            break;
        case (i % 5 === 0):
            console.log ("Buzz");
            break;
        default:
            console.log(i);
        break;
        }
      }
    }
    fizzBuzz2(25);

## *Scope* and *Self*

    var myCar = {
        color: "Blue",
        logColor: function() {
        var self = this;
            console.log("In logColor - this.color: " + this.color);
            console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
      }
    };

    myCar.logColor();

## *Equals* vs. *"Strict" Equals*

    console.log(7 == '7');  // true

    console.log(7 === '7');  // false

## Log number function

    var num = 50;

    function logNumber() {
        console.log(num);
    var num = 100;
    }

    logNumber(); // undefined

## 'use strict';

    'use strict';
    //prevents use of global variables
    // all parameter names for a function must be unique

    function myFunc(a, a, b) {
        console.log(a, a, b);
    }

    myFunc(1, 2, 3)

    // error because two paramaters have the same names


    //var , const or let

    city = "London";
        console.log(city);// will error because of strict error //handling

    // will work without 'use strict'

    // city becomes global variable if 'use strict' is not //used or var, const let are not used

    var city = "london";
    console.log(city);

    // use strict helps us to fail fast and fail LOUDLY

## Logging *X* and *Y*

    (function() {
    'use strict';
        var x = y = 200;
    })();

    console.log('y: ', y);
    console.log('x: ', x);
---

    'use strict';

    (function() {
        var x = y = 200;
    })();

    console.log('y: ', y);
    console.log('x: ', x);

## *Call* and *Apply* methods

	const car1 = {
	  brand: 'Porsche',//property named brand
      getCarDescription: function(cost, year, color) { //method named getCarDescription
      console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
      }
    };
	const car2= {
      brand: 'Lamborghini'
    };

 	// call method gives us a different way of passing arguments in our function

 	// gives us the ability to change the "this" context

	// calling carDescription in traditional way with calling arguments(cost, year, color)
	car1.getCarDescription(80000, 2010, 'blue'); // This car is a Porsche. The price is $80000. The year is 2010. The color is blue.

    // using call method
	car1.getCarDescription.call(car2, 200000, 2013, 'yellow'); This car is a Lamborghini. The price is $200000. The year is 2013. The color is yellow.

    // "this" is implied by argument passed.
	Then add the remaining argumenents after the "this" context call()

	// the call method is similar to the apply method in that it is a native javascript method on the function prototype object

	// the call method gives you an alternative way of calling functions

## *Apply* methods

    const car1 = {
      brand: 'Porsche',//property named brand
      getCarDescription: function(cost, year, color) { //method named getCarDescription
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.`);
      }
    };
    const car2 = {
    brand: 'Lamborghini'
    };

    const car3 = {
    brand: 'Ford',

    };

    // "apply" method is essentially the same as the "call" method except one major difference, when we use    "apply" method, we pass all the parameters for the function as an array instead of individually like we did    with the "call" method.

    car1.getCarDescription(80000, 2010, 'blue'); // This car is a Porsche. The price is $80000. The year is 2010. The color is blue. // normal way of calling a function


    car1.getCarDescription.call(car2, 200000, 2013, 'yellow'); // This car is a Lamborghini. The price is $200000. The year is 2013. The color is yellow.
    // calling a function with the "call" method


    car1.getCarDescription.apply(car3, [35000, 2012, 'black']); // This car is a Ford. The price is $35000. The year is 2012. The color is black.
    //() means invoked
    // calling a function using the "apply" method
    // pass "this" content(car3) in as the first argument.
    // "apply" has to be passed as an array

## Determine Lists

    const list1 = [1,2,3,4,5];
    const list2 = list1;
    list1.push(6, 7, 8);

    console.log(list2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    // passing data by value to a variable.
    If data passed is a primitive data type or it has no
    properties such as a string or number,
    then it is passed as a value. you are
    setting that variable equal to the value of that data.

---


    const myNum = 10; // variable myNum is equal to the value of 10
    const myString = 'hello world' // variable myString is equal to the value of hello world
    const myString2 = myString; // variable myString2 is equal to the value of myString


    // If data type that is being passed is an object, which includes arrays, then that data is being passed as a reference.

    // list 2 and list 1 are both referencing the same array
    // passing data by reference


    let list1 = [1,2,3,4,5];
    let list2 = list1 // list2 would still be referencing original array and not the new list1
    list1 = [10, 20, 30]; // [ 10, 20, 30 ]

### Solution

    const list1 = [1,2,3,4,5];
    const list2 = list1;
    const list2 = list1.slice(); // using this method will copy all of the elements in list1 and return them to us in a new array which we store as list 2.

    //const list2 = [];// set to empty array

    // using for loop to push elements for list1 into list 2 but would be a lot more code and not as clean

    const list2 = list1.concat([]);  // array concat method will concat list1 with an empty array and return newly created array to us which we are storing in list2
    list1.push(6, 7, 8);

    console.log('List 1: ', list1); //Now if we push new elements into list one and console.log new elements, should have (6, 7,8 ) but list2 should not

    console.log('List 2: ', list2); // list2 does not have (6, 7, 8)

    // how can we set list2 equal to the new list1 without referencing the original list 1 array?

    // these examples are two ways to set one array equal to the value of another array without referencing the same underlying data

## Singly or doubly invoked Functions

    // using arguments keyword
    // if used, you can omit passing argumet in ()
    // all arguments passed into function are accessible through (arguments) keyword
    // arguments object is considered an array-like object. It is similar to an array because the properties are numbered like the indexes of an array are, but does not have useful methods that the array has.
    // Can use the array slice method with no parameters passed into it to copy an array.
    // works for this special case but not for a regular object. Just an array-like object.

    // returns { '0': 10, '1': 20}

    function getTotal() {
      var args = Array.prototype.slice.call(arguments);
      //console.log(arguments);

      if (args.length === 2) {
        return args[0] + args[1];
      }

      else if (args.length === 1) {
        return function(num2) {
          return args[0] + num2;

        };
      }
    }

    // single invocation
    console.log(getTotal(10, 20)); // 30
    console.log(getTotal(5, 40)); // 45

    // double invocation
    console.log(getTotal(30)(40)); // 70
    console.log(getTotal(50)(60)); // 110

    // condensed way
    function getTotal(...nums) {
      return nums.length === 1 ? (num2) => nums[0] + num2 : nums[0] + nums[1];
    }

## JSON Data

**Describe what JSON format is:** Javascript object notation. It is a lightweight format for transferring data.

**JSON is used because:**

  1. It is easy for humans to understand.
  2. It is easy for computers to parse and generate.
  3. Delete the data types not permitted in JSON.
  4. Replace placeholder-text with corresponding data type, properly formatted as JSON.

  **Functions** are not allowed in JSON because JSON is only a data description language. Its only purpose is to pass data. It is not a programming language, Therefore it is not used for computing logic.


    const myJsonObj = {
      myString: [some string],
      myNumber: [some number],
      myNull: [null],
      myBoolean: [false],
      myUndefined: [undefined],
      myArray: [some array],
      myFunction: [some function],
      myObject: [some object]
    };

    const myJsonObj = {
      "myString": "some string", // strings must be wrapped in //double quotes "" in JSON format
      "myNumber": 12345.6789,
      "myNull": null,
      "myBoolean": true,
      "myArray": [20, 30, "orange"],
      "myObject": {
        "name": "Sam",
        "age": 30
      }
    }; // every property on an object as well as a nested object is a string in JSON data so we must wrap them in quotes "myString", "myNumber"...


    console.log(myJsonObj);// { myString: 'some string',
                                myNumber: 12345.6789,
                                myNull: null,
                                myBoolean: true,
                                myArray: [ 20, 30, 'orange' ],
                                myObject: { name: 'Sam', age: 30 } }

## Order logged out question

**Question:** What order are the numbers (1, 2, 3, 4) logged out in?

    function logNumbers() {

      console.log(1); // regular statement not wrapped in a setTimeout so it is logged first

      setTimeout(function(){console.log(2)}, 1000); // wrapped in 1s timeout so it is logged last

      setTimeout(function(){console.log(3)}, 0); // logged out third because the setTimeout still
       affects how long it takes for the console.log statement to run. This is because of * event loop * in the browser.
       The event loop is a Queue where all the events in the browser take place. These events can include click events,
       AJAX calls, callback functions, callbacks placed in asetTimeout, SetInterval ... All of the events are pushed into the * event loop *
       queue and then processed one at a time in the order that they were placed in the queue.

      console.log(4);
    }

    logNumbers();

**Answer:** (1, 4, 3, 2)


## Making an Object

### List and describe 3 different ways of creating an object in javascript.

1. **Object literal syntax:**
we have defined object myBoat and we defined all of its properties and methods right inside of it. Most common way to create an object in javascript

        const myBoat = {
          length: 24,
          maxSpeed: 45,
          passengers: 14,
          getLength: function() {
            return this.length;
          }
        };

2. **Using new keyword & Object constructor:** (Object literal notation is still preferred over this method)

        const student = newObject();

        student.grade = 12; // properties
        student.gradePointAverage = 4.0; // properties
        student.classes = ["English", "Algebra", "Chemistry"]; // properties

        student.getClasses = function() {
          return this.classes;
        };

3. **How to make an object with the Constructor function:** (most complex , but interesting way to create an object) If you want to make objects of the same class,this is the way to go.

        function Car(color, brand, year) { // Constructor function takes in 3 parameters
          this.color = color; // set color = to the color passed into the function
          this.brand = brand; // set brand = to the brand passed into the function
          this.year = year; // set year = to the year passed into the function
        }

        Car.prototype.getColor = function() { // set method getColor on Car.prototype object.
        This method will be set for all of our Car objects to use.
        Since we have th getColor method is on the Car prototype both carlys car and jims car can use this method

          return this.color;
        };

        const carlysCar = new Car('blue', 'Ferrari', 2015); // create new Car object

        const jimsCar = new Car('red', 'Tesla', 2014);
          return this.color;


        const carlysCar = new Car('blue', 'Ferrari', 2015);
        const jimsCar = new Car('red', 'Tesla', 2014);

        console.log(carlysCar); // create new Car object // Car { color: 'blue', brand: 'Ferrari', year: 2015 }
        console.log(jimsCar); // Car { color: 'red', brand: 'Tesla', year: 2014 }

        console.log(carlysCar.getColor()); // using getColor method // blue
        console.log(jimsCar.getColor()); // using getColor method // red

## Constructor Function

**A constructor function** is a function that creates an object class and allows you to create multiple instances of that class.

They allow you to create many objects very quickly and these objects will have the same properties and functionality because they are all part of the same class



    function User(firstName, lastName, age, gender) {

    // we capitalize a constructor function because it is best practice and to distinguish from a regular function.

    // in the parentheses pass all the properties that you are going to use in the function.

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    // then assign properties to our object User with the "this" keyword.
    }

    var user1 = new User('John', 'Smith', 26, 'male');
    // we use the new keyword to invoke our constructor function
    and make a user object. That's how we get our constructor function to work
    var user200 = new User('Jill', 'Robinson', 25, 'female');


    user1; // User { firstName: 'John', lastName: 'Smith', age: 26, gender: 'male' }
    user200; // User {  firstName: 'Jill', lastName: 'Robinson', age: 25, gender: 'female' }

## Data Types

### Question: What is logged out for each console.log statement ?

    console.log(typeof null); // object
    console.log(typeof undefined); // undefined
    console.log(typeof {}); // object (function as an object)
    console.log(typeof []); // object (because in JS arrays are of the type object)

### How can we tell if a piece of data is actually an array if our type of operator does not tell us this ?
* We can use isArray method from the Array prototype. Simply call this method and pass in some data that will return true if the data is an array or false if it is not.
---

    console.log(Array.isArray([])); // true

    console.log(Array.isArray({})); // if we change it to an object, we return false beause it is not an array

    console.log([] instanceof Array); //another way to determine if a piece of data is an array is by using the Instance of keyword. This will return to us either true or false as well. true is returned

    console.log({} instanceof Array); // if we change it into an object then false is returned.

    console.log({} instanceof Object); // true

    // knowing that arrays are actually objects in javascript is important
    // knowing that the typeof operator will not be able to determine if a piece of data is an array or not is also important to remember

## Bind Method

### Describe the bind() function method:
### What does the bind method do ?
* The **bind method** allows you to to bind the **'this'** context of a function to a particular object similar to the way that the **'call'** and **'apply'** methods work, with a few differences.

### Describe how it works

    this.distance = 10000; // defined on global scope

    const roadTrip1 = { //roadTrip1 object
    distance: 3000, // distance property
    getDistance: function(unit, caption) { // getDistance method --also passing unit and caption as paramaters
        return this.distance + unit + caption; // return this.distance
    }
    };

    const roadTrip2 = {
    distance: 5000

    };

    // const getTripDistance = roadTrip1.getDistance;

    // we get 10000 returned instead of 3000 because when we call our getTripDistance(), the 'this' context of the function is no longer roadTrip1. but instead the context is the global object. We can fix this by using the 'bind' method.

    const getTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km');

    // getTripDistance(' left to go');


    const getTripDistance2 = roadTrip1.getDistance.bind(roadTrip2, 'km'); // since we passed our units parameter into our bind method here, it should not change if we change the caption message in the console.log or when function is called

    //getTripDistance2();

    console.log(getTripDistance(' left to go')); // 3000km left to go

    console.log(getTripDistance2(' in total')); // 5000km in total

### Explain the parameters that it takes
* Passing **unit** in as a parameter for **getDistance** method and passing **km** for the **bind** method paramater.
* For practice, code out an example of how **bind()** is used.

* The **bind** method allows you to bind a function to a certain **"this"** context. It also allows you to define parameters that you want to hold constant (units,etc..)as well.


