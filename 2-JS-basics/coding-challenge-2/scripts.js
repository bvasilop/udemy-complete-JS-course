/*****************************
 * CODING CHALLENGE 2
 */

/*
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
// IF ELSE
var avgTeamJohn = (89 + 120 + 103) / 3;
var avgTeamMike = (116 + 94 + 123) / 3;
console.log(avgTeamJohn); // 104
console.log(avgTeamMike); // 111

// avgTeamJohn = avgTeamMike = 0; // test for draw

if (avgTeamJohn > avgTeamMike) {
    console.log('John\'s team with the final score of ' + avgTeamJohn + ' is the winner!');
} else if (avgTeamMike > avgTeamJohn) {
    console.log('Mike\'s team with the final score of ' + avgTeamMike + ' is the winner!');
} else {
    console.log('score is a draw!');
}

switch(true) {
    case avgTeamJohn > avgTeamMike:
    console.log('John\'s team with the final score of ' + avgTeamJohn + ' is the winner!');
    break;
    case avgTeamMike > avgTeamJohn:
    console.log('Mike\'s team with the final score of ' + avgTeamMike + ' is the winner!');
    break;
    default:
    console.log('score is a draw!');
}

/*******
 * Extra
 */

var avgTeamJohn = (89 + 120 + 103) / 3;
var avgTeamMike = (116 + 94 + 123) / 3;
var avgTeamMary = (97 + 134 + 105) / 3;


/**********
 * In case of draw

avgTeamJohn = avgTeamMike = avgTeamMary = 100;

 * */

console.log(avgTeamJohn);
console.log(avgTeamMike);
console.log(avgTeamMary);

// IF ELSE
if (avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMary) {
    console.log('John\'s team with the final score of ' + avgTeamJohn + ' is the winner!');
} else if (avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary){
    console.log('Mike\'s team with the final score of ' + avgTeamMike + ' is the winner!');
} else if (avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike){
console.log('Mary\'s team with the final score of ' + avgTeamMary + ' is the winner!');
} else {
    console.log('score is a draw!');
}

/// SWITCH

switch(true) {
    case (avgTeamJohn > avgTeamMike) && (avgTeamJohn > avgTeamMary):
    console.log('John\'s team with the final score of ' + avgTeamJohn + ' is the winner!');
    break;
    case (avgTeamMike > avgTeamJohn) && (avgTeamMike > avgTeamMary):
    console.log('Mike\'s team with the final score of ' + avgTeamMike + ' is the winner!');
    break;
    case (avgTeamMary > avgTeamJohn) && (avgTeamMary > avgTeamMike):
    console.log('Mary\'s team with the final score of ' + avgTeamMary + ' is the winner!');
    break;
    default:
    console.log('score is a draw!');
}
