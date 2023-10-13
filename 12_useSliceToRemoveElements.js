// Remove Elements from an Array Using slice Instead of splice

/* The splice array method takes a start index and 
the number of items to remove which defaults to the 
end of the array if omitted.  An important 
characteristic of splice, however, is that it mutates
the original array.*/

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
console.log(cities);  // ['Chicago', 'Delhi', 'Islamabad', 'Berlin']

/* This constrasts with the slice method that returns
a new array. */

/*
Rewrite the function nonMutatingSplice by using slice instead 
of splice. It should limit the provided cities array to a 
length of 3, and return a new array with only the first three 
items.

Do not mutate the original array provided to the function.
*/

function nonMutatingSplice(cities) {
    const newArray = cities.slice(0, 3);
    return newArray;
}

console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]));