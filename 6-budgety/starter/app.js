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
    var x = 23;

    var add = function(a) { // not accessible outside of IFFY
        return x + a;
    }

    return {
        publicTest: function(b) { // the variables above are available and  public because of closures
            return add(b);
        }
    }
})();

// UI Controller Module

var UIController = (function() {
    // some code3

})();


// App Controller Module

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);
