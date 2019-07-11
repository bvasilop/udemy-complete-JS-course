// Using modules to assist with the architecture of the app
    // keeps project cleanly separated and organized
    // encapsulates data into privacy and expose other data publicly

// TODO list

// UI Module
    // get input values
    // add new item to UI
    // Update UI

// Data Module
    // Add new item to our data structure
    // Calculate budget

// Controller Module
    // Add event handler

// Module Pattern

/* public methods, which means that we expose them to the public so that other functions
or modules can access and use them. And this is called data encapsulation.
So data encapsulation allows us to hide the implementation details of a specific module
from the outside scope so that we only expose a public interface which is sometimes called an API. */

// Budget Controller Module

var budgetController = (function() {



})();

// UI Controller Module

var UIController = (function() {
    // some code



})();


// Global App Controller Module

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // get field input data
        // add item to budget controller
        // add item to UI
        // calculate budget
        // display the budget on UI

        console.log('it works');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) { // use addEventListener because it applies globally and not to a specific element
        if (event.keycode === 13 || event.which === 13) { // || or event.which is for older browsers
            ctrlAddItem();
        }                                      // can use (e) or (event) as argument
    });



})(budgetController, UIController);
