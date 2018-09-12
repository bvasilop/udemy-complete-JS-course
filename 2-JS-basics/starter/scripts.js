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
console.log('job')

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
var now, yearBill, yearLaura, ageJohn, ageMark;
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




