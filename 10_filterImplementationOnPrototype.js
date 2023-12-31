// Implement the filter Method on a Prototype
/* 
Write your own Array.prototype.myFilter(), which should 
behave exactly like Array.prototype.filter(). You should 
not use the built-in filter method. The Array instance 
can be accessed in the myFilter method using this.
*/

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    console.log(this);
    this.forEach((element, index, array) => 
        (callback(element, index, array) ? 
        newArray.push(element) : 
        element));  // iterate through array & apply callback if truthy
    console.log(newArray);
    // Only change code above this line
    return newArray;
};

// [23, 65, 98, 5, 13].myFilter(item => item % 2)  // [23, 65, 5, 13]
// ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")  // ['naomi']
[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)  // [1, 2, 5]