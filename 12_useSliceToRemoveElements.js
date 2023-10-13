// Remove Elements from an Array Using slice Instead of splice

/* The splice array method takes a start index and 
the number of items to remove which defaults to the 
end of the array if omitted.  An important 
characteristic of splice, however, is that it mutates
the original array.*/

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
console.log(cities);  // ['Chicago', 'Delhi', 'Islamabad', 'Berlin']