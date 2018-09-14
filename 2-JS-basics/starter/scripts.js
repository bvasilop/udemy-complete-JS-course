'use strict';

var firstName = 'Bill';
var lastName = 'Vasilopoulos';
var age = 43;
var hairColor = 'brown';
var eyeColor = 'brown';
// age = 'forty three'; // variable mutation value is coerced into a string
console.log(`${firstName} ${lastName} is ${age} years old, has ${hairColor} hair and ${eyeColor} eyes.`);
 //#endregion


function Person(firstName, lastName, age, hairColor, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
}

var person1 = new Person('Bill', 'Vasilopoulos', 43, 'Brown', 'Brown');
var person2 = new Person('Theo', 'Vasilopoulos', 4, 'Brown', 'Brown');

console.log(person1);
console.log(person2);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job); //variable declared but since there is no value assigned it is undefined

job = 'teacher';
console.log('job');

console.log(firstName  + ' ' + age); // how to add a space in between logging values of two variable values

// type coercion javascript automatically converts data types from one to another as it's needed. The Age value (number) is automatically converted into a string so it can join the other strings to create one big string.

var job, isMarried; // cleaner to declare multiple variables and assign below
job = 'musician';
isMarried = true; // type coercion converts true boolean into a string
console.log (firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// isMarried = true; // even undefined values can be coerced into a string

// prompt('What is his last name?');
// var lastName = prompt('What is his last name'); // storing an input value as a variable
// console.log(firstName + ' ' + lastName);


//Math Operators
var now, yearBill, yearLaura, ageJohn, ageMark, yearJohn, fullAge;
yearJohn = 1989;
fullAge= 18;

ageJohn = 28;
ageMark = 33;
now = 2018;
yearBill = now - 43;
yearLaura = now - 42;
console.log(yearBill, yearLaura);
console.log(now + 2);
console.log(now / 2);
console.log(now * 2);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); // false


// typeof operator
console.log(typeof johnOlder); //boolean
console.log(typeof now); //number
console.log(typeof lastName); //string

// operator precendence

var isFullAge = now - yearJohn >= fullAge; // true
                                        // the - is executed first because of order of precedence followed bythe >=
                                        // = is last because assignment operator has the lowest precendence rating
                                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; // () has the highset order of precendence
console.log(average); // (64 /2) = 64

// Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; // right to left is why y and x is not undefined
console.log(x, y); // 8 * 4 - 6 // 32 - 6 // 26
                   // x = associativity assignment direction right to left // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// More Operators
x = x * 2; // same as  below
//x *= 2;
x += 10; // same as x + 10
console.log(x); // 62

// increment operators

x +=1;
x ++;
console.log(x); // 64
x--;
console.log(x); //63

/*****
 * If / else statements
 */

var civilStatus = 'single';

if (civilStatus === 'married') { // returns boolean
    console.log(firstName + ' is married!'); // "Bill is married!
                                            // if single, then no console log because condition is not true
} else {
    console.log(firstName + ' will hopefully marry soon!'); // returns because married condition is not met
}

var isMarried = true;
if (isMarried) { // (is Married === true) we don't need to determine if true because the variable has already been set to true
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

/************************
 * Boolean Logic
 *
 *  AND (&&) => true if ALL are true    ---- var A & var B must both be true to return expression A && B === true in all other case the result will return false
 *  OR (||) => true if ONE is true
 *  NOT (!) => inverts true/false value
 */

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 // && and || operator have lower precedence than >= and < so they can be executed first
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/*******************************
 * The Ternary Operator and Switch Statements (Conditional Operator)
 */

var isLegalDrinkingAge = age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); // ternary operator (has three operands) // must be assigned to a variable for ternary to work
// age >= 18 is the condition (1)
// ? is the if block or statement  (what we want to happen if this condition is true) (2)
// : is the else block or statement (3)
console.log(isLegalDrinkingAge); //Bill drinks beer.
var drink = age >= 18 ? 'beer' : 'juice'; // if age is greater than 18 then beer if not then juice
console.log(drink);
// same as
/*if (age >=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

/*************************
 * Switch Statements
 */
var job = 'instructor';
switch(job)  { //  in parentheses we put what we want to evaluate //switch and comapares a variable
    case 'teacher': // if job is  === to teacher then execute code below  // if ...do this...
    case 'instructor': // can use multiple cases
        console.log(firstName + ' teaches kids how to code.'); // here we say what we want to happen
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Seattle.'); // else if...do this...
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites'); // else if ...do this...
        break;
    default:
    console.log(firstName + ' does something else.'); // else ...do this...
}

/**********  replace with switch statement
 *
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 // && and || operator have lower precedence than >= and < so they can be executed first
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/
age = 10; // practice with changing values
switch(true) { //use true to implement if else statements with ranges like fizzbuzz // the case that will be true will be the one that is executed
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/***********************
 * Truth and Falsy values and equality operators
 *
 * falsy value is false when evaluated in if / else statement conditions
 */
// falsy values: undefined, null, 0, '', NaN // when evaluated in a if / else  condition
// truthy values: Not falsy values

var height; // has been declared but NOT defined // undefined is a falsy value // good way of testing if variable has been defined or not
height = 23; // then height is truthy
// height = 0; // 0 is falsy unless you make height === 0 // see below
// height = ''; // NOT defined because it is a falsy value
if (height || height === 0) { // height is converted to false therefore we enter the else block below // only one has to be true for entire condition to be true
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
// Equality operators
if (height == '23') { // type coercion so data types of both variables do NOT have to match // the '23' gets converted into a number
    console.log ('The == operator does type coercion!');
}

// strict equality operators === is best practice in order to avoid unexpected situations and bugs
// 23 == '23' // true because string '23' is converted to number 23 on the left // yes type coercion
// 23 === '23' // false because string '23' is not same data type as left 23 // no type coercion

/********************
 * Functions
 * ---Functions are like containers that can hold some lines of code. We can pass arguments into them and return us results
 *
 */

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1975); // can save results from functions into variables so we can reuse
var ageMike= calculateAge(1985);
var ageJane = calculateAge(1995);

console.log(ageJohn, ageMike, ageJane);

/*****************
 *
 */

function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year); // functions can call other functions that don't need to return anything
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(`${firstName} is already retired.`); // using template literal
    }
}

yearsUntilRetirement(1920 , 'John');
yearsUntilRetirement(1975, 'Bill');
yearsUntilRetirement(1974, 'Laura');

/****************
 * Function Statements and Expressions
 */

// Function Declaration
/*function whatDoYouDo(job, firstName) {

}*/

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
        return firstName + ' teaches kids how to code';
        // no need for break because return immediately finishes function
        case 'driver':
        return firstName + ' drives a cab in Seattle';
        case 'designer':
        return firstName + ' designs beautiful websites';
        default:
        return firstName + ' does something else';
    }
};
console.log(whatDoYouDo('teacher', 'Shawn'));
console.log(whatDoYouDo('driver', 'Bob'));
console.log(whatDoYouDo('designer', 'Mike'));
console.log(whatDoYouDo('retired', 'Mark'));

// Differences between statements and expressions:
// JavaScript Expressions are pieces of code that always produce a single value
// JavaScript statements just perform actions. They do things but do not produce immediate results
//(if / else statements, while loop, function declaration) don't produce an immediate value

// if(true) { console.log(23);} // 23   //undefined because it's not really returning anything. It is
// just console.log(23); in the console.

/*********************
 * ARRAYS
 */
// Arrays are like collections or bundles of variables that can include different data types

//Initialize New Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); // alternate way of using an array as a function

console.log(names[0]); // John
console.log(names.length); // 3

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // automatically adds to the end of the array // here names.length === 4 items i array so 'Mary' is at [3]
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher, false'];

// Array methods */ PUSH, UNSHIFT, POP, SHIFT, IndexOf ....

john.push('blue'); // will add element at the end of an array
john.unshift('Mr.'); // adds element to beginning of array
john.pop(); // removes element from the end of the array
john.shift(); // removes first element in array
console.log(john.indexOf(1990)); // 2   // will return the position of the arguments that we pass in inside of this array
console.log(john.indexOf(23)); // -1    // if it's not in the array, the method will return a -1 value in the console.log // great way of testing if an element is in the array or not
console.log(john);

// ternary operator
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; // must be assigned to a variable for ternary to work
console.log(isDesigner); // John is NOT a designer // Since element is not in the array it will return -1 // Since -1 === -1 the first condition is met and the isDesigner variable is assigned to the string 'John is NOT a designer'
// If we add 'designer' to the array, the second condition is met and the string 'John IS a designer' is assigned to the variable isDesigner




















