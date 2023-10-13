// Use the filter Method to Extract Data from an Array
/* The filter method takes three arguments like the map
method:
1. the current element;
2. the index of that element;
3. the original array.
*/

const users = [
    {name: 'John', age: 34},
    {name: 'Amy', age: 20},
    {name: 'camperCat', age: 10},    
];

const usersUnder30 = users.filter(user => user.age < 30);
usersUnder30.forEach(user => console.log(user));  
/*
{name: 'Amy', age: 20}
{name: 'camperCat', age: 10} 
*/