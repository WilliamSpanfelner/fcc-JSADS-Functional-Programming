// Refactor Global Variables Out of Functions

/* Two principles to follow when using functional programming:
1. Variables and objects should have their integrity preserved;
2. Function parameters should be declared.
*/

/*
Rewrite the code so the global array bookList is not changed 
inside either function. The add function should add the given 
bookName to the end of the array passed to it and return a new 
array (list). The remove function should remove the given 
bookName from the array passed to it.

Note: Both functions should return an array, and any new 
parameters should be added before the bookName parameter.
*/
// The global variable
const bookList = ["The Hound of the Baskervilles", 
"On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", 
"Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    let newBookList = bookList.slice();  // Copy the array to a new array 
    newBookList.push(bookName);
    return newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let newBookList = bookList.slice();
    const book_index = newBookList.indexOf(bookName);
    if (book_index >= 0) {
        newBookList.splice(book_index, 1);
        return newBookList;

    // Change code above this line
    }
}

let newList = add(bookList, "A Brief History of Time");
console.log(bookList, newList);

newList = remove(bookList, "On The Electrodynamics of Moving Bodies");
console.log(bookList, newList);