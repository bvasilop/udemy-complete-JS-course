/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid
amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills
were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and
$300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT:
Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate
the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
'use strict';

var john = { // start by creating john object literal
    fullName: 'John Smith',
    bills : [124, 48, 268, 180, 42], // create array of bills
    calcTips: function() { // calcTips method without any argument
        this.tips = []; // start with empty array to fill later to our object
        this.finalValues = []; // start with empty array to fill later to our object

        for (var i = 0; i < this.bills.length; i++) { // loop through bills from array to calculate values.
                                            // member access operator (this.bills.length -- the two dots)
                                            // from precedence table. read from left to right.
                                            // this.bills is replaced with bills array. Then we read the length
                                            // property of the array
            // Determine percentage based on tipping rules
            var percentage; // define percentage without assigning
            var bill = this.bills[i]; // create new variable to store the current bill value so we don't repeat code this.bills[i]

            if (bill < 50) { // if (this.bills[i] < 50) is our array with the bills so we assign it to var = bill; to make it easier to read
                            // we access the current position of the array using the current counter variable which is [i]
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) { // if (this.bills[i] < 50 && this.bills[i] < 200)
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            // add results to corresponding array
            this.tips[i] = bill * percentage; // this.tips[i] adds the current position of [i].
                        // bill variable defined from before * this.bills[i] (at the current position) * percentage
            this.finalValues[i] = bill + bill * percentage;

        }
    }
};

var mark = {
    fullName : 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips:function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            // add results to corresponding array
            this.tips[i] = bill * percentage; // filling up empty arrays
            this.finalValues[i] = bill + bill * percentage; // filling up empty arrays

        }
    }
};

function calcAverage(tips) { // it's going to receive a tips array as an argument
    var sum = 0; // loop over array and in each iteration store the current sum in a variable which starts from 0
    for (var i = 0; i < tips.length; i++) { // loop over the tips array and then in each iteration add the current
                                            // elements to the sum
        sum = sum + tips[i]; // sum is = to the current sum + the tips at the current position [i]
    } // say we have an array of [2,4,6], the begging of the array will be at 0 because sum = sum (which is 0 = tips[i])
    return sum / tips.length; // when you have sum of the array, divide by the number of elements in it
}

/* why have a function for calcAverage instead of a method inside of the object ? Because then we would have to
repeat ourselves by providing a method for each object*/

// do the calculations
john.calcTips();
mark.calcTips();
// console.log(john, mark); // calculate tips and log to console

john.average = calcAverage(john.tips); // calculate the average and then store them into the object and this
                                    // is the array where all of the tips are stored in the average property on the john object
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays more tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays more tips, with an average of $' + mark.average);
} // Mark Miller's family pays more tips, with an average of $32.2875

// don't need an else statement because there is no default





