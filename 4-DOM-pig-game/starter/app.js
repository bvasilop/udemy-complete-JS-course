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


var scores, roundScore, activePlayer, dice ;

scores = [0,0]; // initial scores
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1; // floor removes decimal // random between 1 and 6
                                          // (Math.random() * 6) random number between 0 and 5

document.querySelector('#current-' + activePlayer).textContent = dice;
                                    // .textContent only sets text and not HTML
                                    // .querySelector allows us to select items just like css (first element that it finds)
                                    // id current
                                    // because of type coercion '#current-' + activePlayer will be converted to current-0 if
                                    // activePlayer is 0 (dynamic when changed active player 0 or 1)

// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>'; // changes HTML with .innerHTML

// var x = document.querySelector('#score-0').textContent; // example that works for setting and reading (setter and getter)
// console.log(x);

document.querySelector('.dice').style.display = 'none'; // set css with style which is value and display which is property

// Event Processing
// -- An event can only be processed or handled as soon as the execution stack is empty (All the functions have returned)

// Message Queue
// -- This is where all the events in the browser are put and sit waiting to be processed which only happens once the execution stack is empty

// Event listener
// -- Is a function that reacts to an event. Since it's a function, it gets its own execution context which is then put on top of the stack and
// becomes the active execution context. This is how events are processed and how event listeners work.

















