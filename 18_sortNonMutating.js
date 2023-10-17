/* Return a Sorted Array Without Changing 
the Original Array */

/* The sort method mutates the original array in terms of the 
order of the array elements. 

A way to avoid this is to first concatenate an empty array to 
the one being sorted (remembering that slice and concat return
a new array), then run the sort method.
*/

function alphabeticalOrder(arr) {
    const newArray = arr.concat([]);
    console.log(arr);
    return newArray.sort(function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}
  
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/*
Use the sort method in the nonMutatingSort function to sort the 
elements of an array in ascending order. The function should 
return a new array, and not mutate the globalArray variable.
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  const newArray = arr.concat([]);
  return newArray.sort(function (a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
  });

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));