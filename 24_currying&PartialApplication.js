// Introduction to Currying and Partial Application

/* The arity of a function is th number of arguments it requires.
Currying a function means to convert a function of N arity into N
functions of arity 1. 

In other words, currying restructures a function so it takes one 
argument, then returns another function that takes the next argument,
and so on. */

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function (y) {
        return x + y;
    }
}

// const curried = x => y => x + y

console.log(curried(1)(2));  // 3

const funcForY = curried(1);
console.log(funcForY(2));  // 3
