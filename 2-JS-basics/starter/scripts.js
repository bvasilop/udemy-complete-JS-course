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
