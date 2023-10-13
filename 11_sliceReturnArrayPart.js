// Return Part of an Array Using the slice Method
/* The slice array method returns a copy of a group
of array elements and can take two argument: 
1. an index of where to begin the slice;
2. an index of where to end the slice non-inclusively;
*/

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1,3);
console.log(newArray);  // ['Dog', 'Tiger']