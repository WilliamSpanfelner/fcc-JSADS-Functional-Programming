// Use the map Method to Extract Data from an Array
/* Functions can be stored in variables, objects or
passed as function arguments */

/* The Array.prototype.map() or just map method iterates
over an array and returns a new array containing the elements
amended or not by a callback function.  The original array
is not mutated.

The callback function uses three arguments: the current element;
the index of the current element; and the array on which the 
callback function was called. */

const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20},
    {name: "camperCat", age: 10},    
];

const names = users.map(user => user.name);
console.log(names);  // ['John', 'Amy', 'camperCat']
