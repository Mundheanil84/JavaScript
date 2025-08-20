
// Function Expressions

const functionName = function(parameters) {
  // Function body
  // You can perform operations and return a value if needed
};

Example:
const add = function(a, b) {
  return a + b;
};

const result = add(3, 5);
console.log(result);

// Output : 8

// Types of Functions in JavaScript

// In JavaScript, there are several types of functions, each serving different purposes and offering distinct features.
// Here are the main types of functions commonly used in JavaScript:

// Function Declarations: Function declarations are the most common type of functions. They are defined using the function keyword followed by the function name and a set of parentheses containing optional parameters. Function declarations are hoisted to the top of their scope, meaning you can call them before their actual declaration in the code.
Example:
function add(a, b) {
  return a + b;
}

console.log(add(4,5));

// Output
9

//Function Expressions: Function expressions involve assigning a function to a variable or property. They are defined using the function keyword, but the function itself is not hoisted. Function expressions are often used for callback functions or to create anonymous functions.

Example:
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4,5));

// Output
20

// Anonymous Function: Anonymous functions are indeed an important type of function in JavaScript. An anonymous function is a function that does not have a name and is often used in situations where a function is used only once or as a callback function.

Example:
const result = function(a, b) {
  return a + b;
};

console.log(result(5, 3);

// Output
8

// Arrow Functions: Arrow functions are a concise and modern way to write functions introduced in ES6. They have a more compact syntax and do not have their own this or arguments context, using the context of the surrounding code instead.

Example:
const divide = (a, b) => a / b;

console.log(divide(36,9));

// Output
4

// Concise Body Arrow Functions

// There are numerous other ways to alter the syntax of arrow functions in JavaScript. Concise body refers to the function in its most reduced form. 
// Below, we'll look at a number of these strategies:
// Parentheses are not required around a parameter in a function that only accepts one. But, parentheses are necessary if a function has zero or more parameters.

// Zero Parameters
const functionName = () => {};

// One Parameters
const functionName = paramOne => {};

// Two or more Parameters
const functionName = (paramOne, paramTwo) => {};

// Curly braces are not necessary for a function body made out of a single-line block. Whatever that line evaluates will be automatically returned if the curly braces are missing. The return keyword can be deleted, and the block's content should immediately follow the arrow =>. Implicit return describes this situation.

// Single-line block
const sum = number => number + number;

// Multi-line block
const sum = number => {
	const sum = number + number;
	return sum;
}
// Immediately Invoked Function Expressions (IIFE): IIFE is a function expression that is executed immediately after it is defined. It helps create a private scope for variables, preventing them from polluting the global scope.

Example:
(function() {
	let str = "Hello AlmaBetter Learner";
  console.log(str);
})();

// Output
"Hello AlmaBetter Learner"
