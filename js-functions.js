//function declaration
//also called function definition or function statement
//for example, the following function returns the square of a number:
function square(num) {
  return num * num;
}

//function call or function invocation
/* when you want to use any function, you need to invoke and call it, so you invoke or 
call the function by typing its name and passing values in paranthesis (round brackets) */

//for example, for the above function, the function call becomes:
square(10);
/*here, we call the function with its name folllowed by (), and the value '10' is 
passed to the function in () through variable 'num', which will then be returned 
as a square of that value, but we are not outputting anything here yet */

//we can also call or invoke functions within other statements or expressions
console.log(square(5)); //calling the function within console.log() statement
//this is to view the output in the JS console, since the above function definition has no output statement

//function expression
//when you store a function inside of a variable or constant
//example of a function expression created using a constant with 'const' keyword:
const cube = function (num) {
  return num * num * num;
};
console.log(cube(10)); //calling the function within console.log() statement

//example of a function expression created using a variable with 'let' keyword:
let topow4 = function (num) {
  return num * num * num * num;
};
console.log(topow4(2)); //calling the function within console.log() statement

//example of a function expression created using a variable with 'var' keyword:
let topow5 = function (num) {
  return num * num * num * num * num;
};
console.log(topow5(5)); //calling the function within console.log() statement

//first class functions
/*functions in JS can be treated like variables: functions can be passed into other functions,
functions can be used, manipulated and returned from other functions, so basically functions
can also do what variables can do */
//for example, consider these set of functions:
function square(num) {
  return num * num;
}

function displaySquare(something) {
  console.log("Square is: " + something(100));
}

displaySquare(square);

