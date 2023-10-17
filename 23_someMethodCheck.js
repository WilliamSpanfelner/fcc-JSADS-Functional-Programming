/* Use the some Method to Check that Any 
Elements in an Array Meet a Criteria */

/* Similar to the every method is the some method.
It checks if at least one element will pass a test
and returns a boolean. */

const numbers = [10, 50, 8, 220, 110, 11];

console.log(numbers.some(function (currentValue) {
    return currentValue < 10;
}));