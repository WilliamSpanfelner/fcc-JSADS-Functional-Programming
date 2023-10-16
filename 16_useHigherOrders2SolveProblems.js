/* Use Higher-Order Functions map, filter, or 
reduce to Solve a Complex Problem */

/*
Complete the code for the squareList function using any 
combination of map(), filter(), and reduce(). The function 
should return a new array containing the squares of only 
the positive integers (decimal numbers are not integers) 
when an array of real numbers is passed to it. An example 
of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while 
loops or the forEach() function.
*/

const squareList = arr => {
  // Only change code below this line
  const arrIntegers = arr.filter((element) => Number.isInteger(element) && element > 0);
  
//   const newArray = arrIntegers.map((element) => element ** 2);
//   console.log(arrIntegers, newArray);

  return arrIntegers.map((element) => element ** 2);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);  // [25, 9]
// squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) // [16, 1764, 36].
// squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) // [9, 100, 49].
console.log(squaredIntegers);