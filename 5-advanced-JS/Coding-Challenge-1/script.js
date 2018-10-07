/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
'use strict';
(function() { // IIFE


function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() { // add displayQuestion method
        console.log(this.question); // this keyword points to (q1, q2, q3)
    // write a method into the questions prototype property which is the prototype of all of the instances of all of the
        // objects created through it (q1, q2, q3)

        for (var i=0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]); //[i] each iteration this.answer

        }
    }

    Question.prototype.checkAnswer = function(ans) { // add method to prototype to determine if it is correct
        if(ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer! Try again :)');
        }
    };

var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What\'s the name of this course\'s teacher?',  ['John', 'Michael', 'Jonas'], 2);
var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3]; // store questions in an array

var n = Math.floor(Math.random() * questions.length); // provides random questions from questions array // Math.floor removes decimals

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.')); // use parseInt because we want a number and not a string -- converts a string to an integer number

questions[n].checkAnswer(answer);

}) (); // IIFE
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


'use strict';
(function() { // IIFE


function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() { // add displayQuestion method
        console.log(this.question); // this keyword points to (q1, q2, q3)
    // write a method into the questions prototype property which is the prototype of all of the instances of all of the
        // objects created through it (q1, q2, q3)

        for (var i=0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]); //[i] each iteration this.answer

        }
    }

    Question.prototype.checkAnswer = function(ans) { // add method to prototype to determine if it is correct
        if(ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer! Try again :)');
        }
    };

var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What\'s the name of this course\'s teacher?',  ['John', 'Michael', 'Jonas'], 2);
var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3]; // store questions in an array


function nextQuestion() { // add a function to handle displaying next random question over and over


    var n = Math.floor(Math.random() * questions.length); // provides random questions from questions array // Math.floor removes decimals

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.'); // use parseInt because we want a number and not a string -- converts a string to an integer number



    if (answer !== 'exit') { // if answer is different that 'exit' prompt then add next random question

    questions[n].checkAnswer(parseInt(answer)); // do this when user doesn't choose to exit game // we only need to check if the answer is correct if the game continues

        nextQuestion();
    }
}

nextQuestion();




})(); // IIFE
