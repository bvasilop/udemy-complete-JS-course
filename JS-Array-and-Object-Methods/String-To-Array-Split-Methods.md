# Convert String to Array with JavaScript's split Method

**JavaScript's string _split_ method returns an array of substrings obtained by splitting a string on a separator you specify. The separator can be a string or regular expression.**

---

**Invoke the _split_ method on the string you want to split into array elements. Pass the separator you want to use to split the string as the first argument, and a new array will be returned. A simple example demonstrates**

```javascript
var fruits = 'apple, orange, pear, banana, raspberry, peach';
var ar = fruits.split(', '); // split string on comma space
console.log(ar);
// [ "apple", "orange", "pear", "banana", "raspberry", "peach" ]
```

### Separator Varieties

#### _No Separator:_ If you don't pass a separator argument to the split method, the resulting array will have a single element consisting of the entire string

```javascript
var str = 'abcdefg';
var ar = str.split(); // no separator passed to split
console.log(ar); // [ "abcdefg" ]
```

#### _Empty String Separator:_ If you pass an empty string as a separator, each character in the string will become an element in the returned array

```javascript
var str = 'abcdefg';
var ar = str.split(''); // empty string separator
console.log(ar); // [ "a", "b", "c", "d", "e", "f", "g" ]
```

#### _Separator at Beginning/End:_ First and last elements of the resulting array can be empty strings if the separator is found at the beginning or end of the string

```javascript
var str = '|a|b|c|d|e|f|g|';
var ar = str.split('|');
console.log(ar); // [ "", "a", "b", "c", "d", "e", "f", "g", "" ]
```

#### _Regular Expression Separator:_ The separator can be a regular expression

```javascript
var str =
  'favorite desserts: brownies, banana bread, ice cream, chocolate chip cookies';
// regular expression separator
var re = /:\s|,\s/; // split on colon space or comma space
var ar = str.split(re);
console.log(ar);
// [ "favorite desserts", "brownies", "banana bread", "ice cream", "chocolate chip cookies" ]
```

#### _Capturing Parentheses:_ The separator is not generally included in the array returned by the split method. However, if your regular expression separator includes capturing parentheses, the separators will be included in separate elements of the resulting array

```javascript
var str =
  'favorite desserts: brownies, banana bread, ice cream, chocolate chip cookies';
var re = /(:\s|,\s)/; // regular expression with capturing parentheses
var ar = str.split(re);
console.log(ar);
// [ "favorite desserts", ": ", "brownies", ", ", "banana bread", ", ", "ice cream", ", ", "chocolate chip cookies" ]
```

### Optional Limit Argument

- An optional second argument to the split method sets a limit on the number of elements in the returned array:

```javascript
var str = 'abcdefg';
var ar = str.split('', 3); // limit array to 3 elements
console.log(ar); // [ "a", "b", "c" ]
```
