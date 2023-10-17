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