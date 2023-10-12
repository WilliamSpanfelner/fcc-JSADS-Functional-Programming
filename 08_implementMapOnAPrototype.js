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
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));  // this[i] = element; i = index; this = array
    }

    // Only change code above this line
    return newArray;
};

console.log([1,2,3,4,5].map((x) => x * 2));  // [2, 4, 6, 8, 10]
console.log([1,2,3,4,5].myMap((x) => x ** 2));  // [1, 4, 9, 16, 25]
console.log([1,1,2,5,2].myMap((element, index, array) => array[index + 1] || array[0]));

console.log("\n\n this = ");

function showContext() {
    console.log(this);
}
showContext();  /* global {
                        global: global,
                        queueMicrotask: ƒ, 
                        clearImmediate: ƒ, 
                        setImmediate: ƒ, 
                        structuredClone: ƒ, 
                        …} */

const objectA = {};
objectA.showContext = showContext;
objectA.showContext();  // {showContext: ƒ}

const objectB = {};
// objectB.showContext();  // TypeError: objectB.showContext is not a function

Object.prototype.showContext = showContext;
objectB.showContext();

console.log("\n");
const magic = () => new Date();
console.log(magic());

console.log("\n");
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

console.log("\n");
const increment = (number, value = 1) => number + value;
console.log(increment(5));
console.log(increment(5, 5));

function logThis() {
    "use strict";
    console.log(this);
}

[1,2,3].forEach(logThis, {name: 'obj'});