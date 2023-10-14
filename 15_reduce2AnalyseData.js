// Use the reduce Method to Analyze Data

/* The Array.prototype.reduce() or simply reduce() array method
is a general purpose method. The filter and map methods can be 
derived as special applications of the reduce method.  Reduce 
returns a single value upon iterating over each array element 
through the use of a callback function.  

The callback function accepts four arguments: 
1. an accumulator that is assigned the return value from the previous iteration;
2. the current element;
3. the index of the element;
4. the array upon which reduce is called.

Reduce can also take an additional argument which is an initial value
for the accumulator.
*/

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);  // 64

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});

console.log(usersObj);  // {John: 34, Amy: 20, camperCat: 10}