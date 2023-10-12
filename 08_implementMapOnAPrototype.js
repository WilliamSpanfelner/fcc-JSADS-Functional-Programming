// Implement map on a Prototype

/*
Write your own Array.prototype.myMap(), which 
should behave exactly like Array.prototype.map(). 
You should not use the built-in map method. The 
Array instance can be accessed in the myMap 
method using this. 
*/
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    console.log(this, callback);
    // this.forEach((...arg) => newArray.push(callback(...arg)));
    // in this case the same can be acheived with:
    this.forEach((element, index, array) => 
        newArray.push(callback(element, index, array)));

    // Only change code above this line
    return newArray;
};

console.log([1,2,3,4,5].map((x) => x * 2));  // [2, 4, 6, 8, 10]
console.log([1,2,3,4,5].myMap((x) => x ** 2));  // [1, 4, 9, 16, 25]
console.log([1,1,2,5,2].myMap((element, index, array) => array[index + 1] || array[0]));