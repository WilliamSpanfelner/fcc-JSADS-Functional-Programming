/* Use the every Method to Check that Every 
Element in an Array Meets a Criteria */

/* The every method tests each element of
an array to return a single boolean result */

const numbers = [1, 5, 8, 0, 10, 11];

console.log(numbers.every(function (currentValue) {
    return currentValue < 10;
}));  // false