/* Use the every Method to Check that Every 
Element in an Array Meets a Criteria */

/* The every method tests each element of
an array to return a single boolean result */

const numbers = [1, 5, 8, 0, 10, 11];

console.log(numbers.every(function (currentValue) {
    return currentValue < 10;
}));  // false

/*
Use the every method inside the checkPositive function to 
check if every element in arr is positive. The function 
should return a Boolean value.
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.every((currentValue) => currentValue >= 0);
    // Only change code above this line
}

// console.log(checkPositive([1, 2, 3, -4, 5]));  // false
console.log(checkPositive([1, 2, 3, 4, 5]));  // 