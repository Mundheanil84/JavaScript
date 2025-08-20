
// // String Operations
// Create JavaScript Strings
// To create a string in JavaScript, surround the text with quotes.
// There are three options to choose from:
// Single quotes: 'Hello, World'
// Double quotes: "Hello, World"
// Template Literals (Backticks): `Hello, World`

//strings example
let singleQuoteString = 'This is a string using single quotes.';
let doubleQuoteString = "This is a string using double quotes.";
let templateLiteralString = `This is a string using a template literal.`;

// Single or double quotes are preferred, as they have practically the same function.
// Backticks are commonly used to incorporate variables or expressions into a string. The ${} syntax is used to interpolate the values of the variables into the string.

const name = "Ryan";
const age = 28;

console.log(`My name is ${name} and I am ${age} years old.`);

// ccess String Characters
// There are two ways to access the characters in a string.
// First approach is to treat strings as if they were arrays.

const a = 'hello';
console.log(a[1]); // "e"

// Another option is to use the charAt() method. 

const a = 'hello';
console.log(a.charAt(1)); // "e"