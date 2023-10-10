// Pass Arguments to Avoid External Dependence in a Function

/* Declare dependencies explicity by passing a variable or 
object directly to a function as an argument. */

/*
Let's update the incrementer function to clearly declare its 
dependencies.

Write the incrementer function so it takes an argument, and 
then returns a result after increasing the value by one.
*/

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
    return fixedValue + 1;

  // Only change code above this line
}

let newValue = incrementer(fixedValue);
console.log(fixedValue, newValue);  // 4 5