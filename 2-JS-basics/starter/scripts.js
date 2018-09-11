var firstName = 'Bill';
var lastName = 'Vasilopoulos';
var age = 43;
var hairColor = 'brown';
var eyeColor = 'brown';
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

