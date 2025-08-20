
// In JavaScript, hoisting is a behavior where variables and functions are moved to the top of their scope during the compilation phase, before the code is executed. This means you can use variables or functions before they are declared in the code.

// Hoisting with Function

sayHello();  // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// Hoisting with Variable

console.log(name);  // Output: undefined
var name = "Sohan";

// Hoisting with let and const

console.log(age);  // Error: Cannot access 'age' before initialization
let age = 25;

