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

### Counter Function with Closure

* **Write a function that keeps track of how many times it was called and returns that number. All functionality should be inside of the function.**

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

 	//call method gives us a different way of passing arguments in our function

 	// gives us the ability to change the "this" context

	//calling carDescription in traditional way with calling arguments(cost, year, color)
	car1.getCarDescription(80000, 2010, 'blue');

	//using call method
	car1.getCarDescription.call(car2, 200000, 2013, 'yellow');// "this" is implied by argument passed.
	Then add the remaining argumenents after the "this" context call()

	//the call method is similar to the apply method in that it is a native javascript method on the function prototype object

	// the call method gives you an alternative way of calling functions