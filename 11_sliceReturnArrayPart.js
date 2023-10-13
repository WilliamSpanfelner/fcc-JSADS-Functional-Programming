// Return Part of an Array Using the slice Method

/* The slice array method returns a copy of a group
of array elements and can take two argument: 
1. an index of where to begin the slice;
2. an index of where to end the slice non-inclusively;
*/

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1,3);
console.log(newArray);  // ['Dog', 'Tiger']

/* Use the slice method in the sliceArray function to return part of 
the anim array given the provided beginSlice and endSlice indices. 
The function should return an array. */

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));