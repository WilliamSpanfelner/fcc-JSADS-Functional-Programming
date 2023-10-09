// Understand Functional Programming Terminology

/* 
Callbacks are functions that are passed as arguments
to another function to decide how that function will be 
invoked. 

First class functions (all functions in JavaScript), can
be returned from a function, passed into another function or
assigned to a variable like any other value.

Higher order functions can take a function as an argument
or return a function.

A lambda function can take a function as an argument or
return a function.
*/ 

/* 
Prepare 27 cups of green tea and 13 cups of black tea 
and store them in tea4GreenTeamFCC and tea4BlackTeamFCC 
variables, respectively. 
Note that the getTea function has been modified so it now 
takes a function as the first argument.

Note: The data (the number of cups of tea) is supplied 
as the last argument. We'll discuss this more in later 
lessons.
*/

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);