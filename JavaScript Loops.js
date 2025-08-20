
//  For loop
//  A for-loop is a control flow statement that allows you to execute a block of code repeatedly. It's typically used when you need to perform a specific task a certain number of times or when you need to iterate over an array or object. 

// The basic syntax for a for-loop in JavaScript is as follows:

for (initialization; condition; increment/decrement) {
  // code to be executed
}

// Example 1: Display a Text Five Times

// program to display text 5 times
for (let i = 0; i < 5; i++) {
  console.log("Hello, world!");
}

// Example 2: To Display Numbers from 1 to 5

// write a program to display numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Infinite for loop
// An infinite loop in JavaScript is a loop that runs indefinitely and it never breaks unless the browser is closed or the program is manually stopped.

// Here's an example of an infinite loop using a for loop:

// infinite for loop
for (;;) {
  console.log("This loop will run indefinitely!");
}

// While loop
// The while loop in JavaScript is a statement for controlling the flow of code that enables the repeated execution of a code block while a certain condition remains true.

// The syntax for a while loop in JavaScript is as follows:

while (condition) {
  // code to be executed while the condition is true
}

// Example 1: To display Numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Example 2: Sum of Positive Numbers Only
// array of numbers
const numbers = [5, -2, 10, 0, -3, 8, -1];

// variable to store the sum
let sum = 0;

// index variable for the while loop
let i = 0;

// Using a while loop, iterate through the array and add any positive numbers to the sum
while (i < numbers.length) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
  i++;
}

// print the sum of positive numbers
console.log(`The sum of positive numbers is ${sum}`);

// do...while loop
// The do...while loop in JavaScript shares similarities with the while loop, except that it runs the loop body at least once, regardless of whether the condition is false or not. The loop condition is checked after each iteration, and the loop continues to execute until the condition becomes false.

// Here's the syntax for the do...while loop in JavaScript:

do {
  // loop body
} while (condition);

// Example: To display Numbers from 1 to 5
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

