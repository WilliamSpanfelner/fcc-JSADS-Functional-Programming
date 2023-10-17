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