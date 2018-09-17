/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and
also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and
the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

'use strict';

var mark = { // object literal syntax
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height); // store result of function to this.bmi variable
        return this.bmi; // return it from the method
    }
};

var john = {
    fullName: 'John Thomas',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI(); // calling john bmi method
mark.calcBMI(); // calling mark bmi method
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
        console.log(mark.fullName + ' has a higher bmi of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
