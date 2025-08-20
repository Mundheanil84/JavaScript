
// A function in JavaScript is a piece of reusable code that, when called or executed, completes a certain operation or computation.
// Functions can also be supplied as arguments to other functions, set to variables, and returned as values by other functions. JavaScript functions are a core component of the language and are often utilized to develop modular code and create complicated applications.
// Functions are used to make code less repetitive, more reusable, more modular, and simpler to comprehend. They are crucial for creating intricate software systems and are a fundamental idea in the majority of programming languages.

// Example of a simple JavaScript function:

// Defining the function
function sum(num1, num2) {
  console.log(num1 + num2);
}

// Calling the function
sum(3, 6);      // Output: 9

// Function Declarations
// In JavaScript, function declarations are one of the fundamental ways to define and create reusable blocks of code that can be called later in the program. They allow you to encapsulate logic and operations, making your code more organized and easier to maintain.

// Here's the syntax for a function declaration:

function functionName(parameter1, parameter2) {
  // Function body: code that is executed when the function is called
  // You can use parameters and perform operations here
  return result; // Optional: You can return a value from the function
}

// Calling a Function
// In JavaScript, calling a function is the process of executing the code inside the function's body. When you call a function, you use its name followed by parentheses (). If the function has any parameters, you can pass arguments to those parameters within the parentheses. The function will then be executed with the provided arguments, and it may return a value if it contains a return statement.


// Here's how you call a function in JavaScript:
// Function declaration

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Function call with argument
sayHello("John");

// “return” keyword
// The return keyword in JavaScript is used to specify the value that a function should produce and send back when called. When a function encounters a return statement, it immediately exits the function and returns the specified value to the caller. If there is no return statement in the function, it implicitly returns undefined.

// Here's an example of a function using the "return" keyword:

function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);

// Parameters: Parameters are placeholders or variables defined in the function's declaration. They act as local variables within the function's body, representing the values that the function expects to receive when it is called. Parameters are listed inside the parentheses () when declaring a function.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Default Parameters: In JavaScript, default parameters allow you to specify default values for function parameters. If a function is called without providing a value for a parameter, the default value is used instead. This feature was introduced in ECMAScript 6 (ES6) and provides a convenient way to handle missing or undefined arguments..

function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // Function body
}

Example:
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("John");


