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
'use strict';
function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question); // this keyword points to (q1, q2, q3)
    // write a method into the questions prototype property which is the prototype of all of the instances of all of the
        // objects created through it (q1, q2, q3)

        for (var i=0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]); //[i] each iteration this.answer

        }
    }

    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What\'s the name of this course\'s teacher?',  ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3]; // store questions in an array

    var n = Math.floor(Math.random() * questions.length); // provides random questions from questions array // Math.floor removes decimals

    questions[n].displayQuestion();








