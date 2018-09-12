/*****************************
 * CODING CHALLENGE 1
 */
/*
Mark and John are trying to compare their BMI which is calculated using the formula
BMI = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate their BMI's
3. Create a boolean variable containing info about whether or not Mark has a higher BMI than Mark.
4. Print a string in the console containing the variable from step 3
 ( Something like "Is Mark's BMI greater than John's? true")

 */



var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;

massJohn = 92; // kg
massMark = 78; // kg
heightJohn = 1.95; // meters
heightMark = 1.69; // meters

bmiJohn = massJohn / (heightJohn * heightJohn); // 2
bmiMark = massMark / (heightMark * heightMark); // 0.7
console.log(bmiJohn);
console.log(bmiMark);

var isMarkBmiGreater = bmiMark > bmiJohn; // false
console.log(isMarkBmiGreater);
console.log('Is Mark\'s BMI greater than John\'s ?' + ' ' + isMarkBmiGreater);
