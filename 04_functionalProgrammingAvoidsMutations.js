// Avoid Mutations and Side Effects Using Functional Programming

/* Changing or altering values is called mutation in functional
programming, while the outcome is called a side-effect.  Functions
should be pure functions that do not cause side effects. */

/* Fill in the code for the function incrementer so it returns the 
value of the global variable fixedValue increased by one. */
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
    return fixedValue + 1;

  // Only change code above this line
}

const newValue = incrementer();
console.log("fixedValue: " + fixedValue + "\nnewValue: " + newValue);