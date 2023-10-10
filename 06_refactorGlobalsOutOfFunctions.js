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
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}