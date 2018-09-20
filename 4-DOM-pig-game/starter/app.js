/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/************
 * DOM: Document Object Model
 */

// DOM is a structured representation of an HTML document
// -- it is used to connect webpages to scripts like JavaScript
// for each HTML box, there is an object in the DOM that we can access and interact with
// DOM is a fully object-oriented representation. For each section (block) of our html code there is an
// object in the DOM that we can access and interact with
// using methods (functions attached to objects (document object) )to manipulate and interact with the DOM
// HTML webpage content is stored in the DOM which can then be accessed and manipulated by javascript

// An HTML (content) document has elements which are composed of start tags content and  end (closing) tags
// We write elements into one another and create a nested structure
// HTML attributes: class, id, src, alt, ...
// Class attributes gives elements a name. ID's with in elements also help give elements a name
// (difference is ID has to be unique) (Class name can be used over and over again)

// HTML structure broken down into two parts: Head(link and file (css,javascript) imports ) and Body (Visible Content)



// What we will learn
// How to create our fundamental game variables;
// How to generate a random number
// How to manipulate the DOM
// How to read the DOM
// How to change CSS styles

'use strict';
var scores, roundScore, activePlayer, gamePlaying ; // removed dice because we want to use dice in the scope of the function below and not globally
init();                               // we don't need to define variables, we just need to declare them so they
                                    // can be used in other scopes and functions
/*scores = [0,0]; // initial scores
roundScore = 0;
activePlayer = 0;*/ // added to init()

// dice = Math.floor(Math.random() * 6) + 1; // floor removes decimal // random between 1 and 6
                                          // (Math.random() * 6) random number between 0 and 5

// document.querySelector('#current-' + activePlayer).textContent = dice;
                                    // .textContent only sets text and not HTML
                                    // .querySelector allows us to select items just like css (first element that it finds)
                                    // id current
                                    // because of type coercion '#current-' + activePlayer will be converted to current-0 if
                                    // activePlayer is 0 (dynamic when changed active player 0 or 1)

// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>'; // changes HTML with .innerHTML

// var x = document.querySelector('#score-0').textContent; // example that works for setting and reading (setter and getter)
// console.log(x);

/*document.querySelector('.dice').style.display = 'none'; // set css with style which is a value and display which is a property

document.getElementById('score-0').textContent = '0'; // using getElementByID as an alternative to using querySelector
document.getElementById('score-1').textContent = '0'; // resets score to 0 upon initial startup
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';*/ // added to init()

// Event Processing
// -- An event can only be processed or handled as soon as the execution stack is empty (All the functions have returned)

// Message Queue
// -- This is where all the events in the browser are put and sit waiting to be processed which only happens once the execution stack is empty

// Event listener
// -- Is a function that reacts to an event. Since it's a function, it gets its own execution context which is then put on top of the stack and
// becomes the active execution context. This is how events are processed and how event listeners work.

/******************
 * Setting up our event handler
 */

// roll dice button (btn-roll)

/*function btn() {
   // do something here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn); // first argument is event type ('click')
                            // second argument is the function that will be called as soon as the event happens
                            // btn is setup as a callback function because btn is setup without the () because we
                            // don't want to call it right here. We want the event listener to call it for us and the btn
                            // function (callback function) is a function that is not called by us but by another function
                            // (callback function) a function that we pass into another function as an argument and this function
                            // (addEventListener) will then call that function for us
                            // You could also pass the actual function in as an argument if you wanted to (anonymous function)
                            // (anonymous function) is a function that doesn't have a name so it cannot be reused */

document.querySelector('.btn-roll').addEventListener('click', function () { // anonymous function // cannot be reused
    if (gamePlaying) { // condition is true or false value so we don't need anything else
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; // declared var dice here because we want to use it within this scope here(inside) and not globally (outside)

    // 2. Display the result
    var diceDOM = document.querySelector('.dice'); // setting variable allows us to reuse without having to retype over and over
    diceDOM.style.display = 'block'; // we can reuse the variable we just created above
    diceDOM.src = 'dice-' + dice + '.png'; // changing our image (src attribute)


    // 3. Update the round score IF the rolled number was NOT a 1 ( if we roll 1, we lose and it's next player's turn)
    if (dice !== 1) { // !== performs type coercion and means different than 1 in this case
        // add score
        roundScore += dice; // same as: roundScore = roundSCore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore // each time player rolls dice, we want to first update
                                                                // roundScore then display roundScore in our UI
    } else {

        nextPlayer();
        // next player
        /*************** substitute nextPlayer() to keep it DRY
         *
         *

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // using ternary operator // when we score a 1 the player switches to the other
        /* if (activePlayer === 0) { // same as above but using if / else
            activePlayer = 1;
            } else {
                activePlayer = 0;
            }
            roundScore = 0; // reset to 0 when 1 is scored

            document.getElementById('current-0').textContent = '0'; // update ui to reset score to 0
            document.getElementById('current-1').textContent = '0';



    // update ui for who is active player (red dot and gray background) removing and adding classes (.player-0-panel active)
    // document.querySelector('.player-0-panel').classList.remove('active'); // for removing active class
    // document.querySelector('.player-1-panel').classList.add('active'); // for adding active class

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); // for toggling active class on and off


    document.querySelector('.dice').style.display = 'none';  // hiding dice on startup

 */

        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() { // implement the hold button

    if (gamePlaying) { // gamePlaying condition

    // add current score to global score
    scores[activePlayer] += roundScore; // passing total score into scores array
    // scores[activePLayer] = scores[activePlayer] + roundScore; // same as above

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; // if it's the first player hen it's the first element of the array
                                    // if it's the second player, then it's the second element in the array
    /******************************
     *
     * Substitute nextPLayer() to replace code to keep it DRY

    // Check if player won the game */

    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; // added functionality for winner
        document.querySelector('.dice').style.display = 'none'; // remove dice once game is over
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // for adding winner class and panel
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // removing active class and panel so came can't continue unless resetting

        gamePlaying = false; // resetting our state variable to false

    } else {

    nextPlayer();

    }

}


/*
    // added same code / functionality from above to switch players

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // using ternary operator // when we score a 1 the player switches to the other

        roundScore = 0; // reset to 0 when 1 is scored

        document.getElementById('current-0').textContent = '0'; // update ui to reset score to 0
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); // for toggling active class on and off

        document.querySelector('.dice').style.display = 'none';  // hiding dice on startup

        */


});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // using ternary operator // when we score a 1 the player switches to the other

        roundScore = 0; // reset to 0 when 1 is scored

        document.getElementById('current-0').textContent = '0'; // update ui to reset score to 0
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active'); // better to add or remove classes with js than changing css in js
        document.querySelector('.player-1-panel').classList.toggle('active'); // for toggling active class on and off

        document.querySelector('.dice').style.display = 'none';  // hiding dice on startup

}

        document.querySelector('.btn-new').addEventListener('click', init); // init callback passed as argument refactored to init()
        /*scores = [0, 0]; // resetting for add new game implementation
        activePlayer = 0;
        roundScore = 0;*/
        // refactored to init()



function init() {
    scores = [0,0]; // initial scores
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; // set css with style which is a value and display which is a property

    document.getElementById('score-0').textContent = '0'; // using getElementByID as an alternative to using querySelector
    document.getElementById('score-1').textContent = '0'; // resets score to 0 upon initial startup
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'; // added to init()

    document.getElementById('name-0').textContent = 'Player 1'; // removing "Winner" and resetting player names
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner'); // remove winner upon reset
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-1-panel').classList.remove('active'); // remove player upon reset so we don't duplicate or have an active classes
    document.querySelector('.player-0-panel').classList.add('active'); // then re-add active class




}

/******************
 * state variables
 * // tells us the condition of a system
 * // used when we need to remember something or the state of something (is our game playing or is it not playing)
 * // the init() is called when we start new game and it resets our state variable gamePlaying = true
 */











