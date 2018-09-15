/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is
between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/




'use strict';
function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}
console.log(tipCalculator(100)); // 15  // test to see if function is working at 15% since bill >= 50 and < 200
console.log(tipCalculator(200)); // 10  // working at 10% since bill >= 200
console.log(tipCalculator(40)); // 8 // working ar 20% since bill < 50


const bills = [124, 48, 268];

const tips = [tipCalculator(bills[0]), // 18.599999999999998
            tipCalculator(bills[1]), // 9.600000000000001
            tipCalculator(bills[2])]; // 26.8

const finalValues = [bills[0] + tips[0], // 142.6
                    bills[1] + tips[1], // 57.6
                    bills[2] + tips[2]]; // 294.8

console.log(tips, finalValues);

/************
 * switch and case ************Not Complete!!!
 */

/*function tipCalculator(bill) {
    let percentage;
    switch(bill) {
        case bill < 50:
        percentage = 0.2;
        break;
        case (bill >= 50 && bill < 200):
        percentage = 0.15;
        break;
        default:
        return percentage * bill;
    }
}
*/

