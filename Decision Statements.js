
// If Statement
// In JavaScript, an if statement is used to execute a code block based on a Boolean expression conditionally. An if statement follows the syntax as shown below:

if (expression) {
  // code to execute if expression is true 
}

// Here's an example:
const num = 10;
if (num > 0) {
  console.log("The number is positive");
}

// If...else Statement
 // In JavaScript, there are two forms of the if...else statement: if-else statement: This statement executes a block of code if the if condition is true and another block of code if the condition is false. 

// The if-else statement has the following syntax:
if (condition) {
} else {
}

//Here's an example:
const num = 10;
if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// if-else if statement: This statement executes different blocks of code based on multiple conditions. 

// The syntax of the if-else if statement is as follows:

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if both condition1 and condition2 are false
}

// Here's an example:
const num = 10;
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}




// Body of if...else With Only One Statement

const num = 10;

if (num > 0)
  console.log("The number is positive");
else
  console.log("The number is not positive");