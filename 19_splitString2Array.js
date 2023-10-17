// Split a String into an Array Using the split Method

/* The split method take an argument for a delimiter, 
that can either be a character or a regular expression. 
*/

const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace);  // ['Hello', 'World']

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits);  // ['How', 'are', 'you', 'today']

/* Splitting strings can make it easier to work with them 
especially since strings are immutable. */

/*
Use the split method inside the splitify function to split str 
into an array of words. The function should return the array. 
Note that the words are not always separated by spaces, and the 
array should not contain punctuation.
*/
function splitify(str) {
    // Only change code below this line
  
  
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");