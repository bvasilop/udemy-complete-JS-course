# Convert String to Array with JavaScript's split Method
#### JavaScript's string *split* method returns an array of substrings obtained by splitting a string on a separator you specify. The separator can be a string or regular expression.

#### Invoke the *split* method on the string you want to split into array elements. Pass the separator you want to use to split the string as the first argument, and a new array will be returned. A simple example demonstrates:

    var fruits = 'apple, orange, pear, banana, raspberry, peach';
    var ar = fruits.split(', '); // split string on comma space
    console.log( ar );
    // [ "apple", "orange", "pear", "banana", "raspberry", "peach" ]

### Separator Varieties
#### *No Separator:* If you don't pass a separator argument to the split method, the resulting array will have a single element consisting of the entire string:

    var str = 'abcdefg';
    var ar = str.split(); // no separator passed to split
    console.log( ar ); // [ "abcdefg" ]

#### *Empty String Separator:* If you pass an empty string as a separator, each character in the string will become an element in the returned array:

    var str = 'abcdefg';
    var ar = str.split(''); // empty string separator
    console.log( ar ); // [ "a", "b", "c", "d", "e", "f", "g" ]

#### *Separator at Beginning/End:* First and last elements of the resulting array can be empty strings if the separator is found at the beginning or end of the string:

    var str = '|a|b|c|d|e|f|g|';
    var ar = str.split('|');
    console.log( ar ); // [ "", "a", "b", "c", "d", "e", "f", "g", "" ]

#### *Regular Expression Separator:* The separator can be a regular expression:

    var str = 'favorite desserts: brownies, banana bread, ice cream, chocolate chip cookies';
    // regular expression separator
    var re = /:\s|,\s/; // split on colon space or comma space
    var ar = str.split(re);
    console.log( ar );
    // [ "favorite desserts", "brownies", "banana bread", "ice cream", "chocolate chip cookies" ]

#### *Capturing Parentheses:* The separator is not generally included in the array returned by the split method. However, if your regular expression separator includes capturing parentheses, the separators will be included in separate elements of the resulting array:

    var str = 'favorite desserts: brownies, banana bread, ice cream, chocolate chip cookies';
    var re = /(:\s|,\s)/; // regular expression with capturing parentheses
    var ar = str.split(re);
    console.log( ar );
    // [ "favorite desserts", ": ", "brownies", ", ", "banana bread", ", ", "ice cream", ", ", "chocolate chip cookies" ]

### Optional Limit Argument
An optional second argument to the split method sets a limit on the number of elements in the returned array:

    var str = 'abcdefg';
    var ar = str.split('', 3); // limit array to 3 elements
    console.log( ar ); // [ "a", "b", "c" ]