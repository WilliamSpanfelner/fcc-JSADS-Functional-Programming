/* Add Elements to the End of an Array Using 
concat Instead of push */

/* The push array method adds element to the end of an array,
mutating the original array.  */

const arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);  // [1, 2, 3, 4, 5, 6]

/*
Change the nonMutatingPush function so it uses concat to merge 
newItem to the end of original without mutating original or 
newItem arrays. The function should return an array.
*/

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.push(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);