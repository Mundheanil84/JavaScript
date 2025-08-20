
// Array literal
// This is the most common way to create an array, using square brackets [] and placing the array elements inside the brackets, separated by commas. 

let fruits = ['apple', 'banana', 'orange'];

//  Array Constructor
// An alternative method to create an array involves using the Array() constructor with the new keyword. With this approach, the length of the array needs to be specified as an argument.

let numbers = new Array(3); // creates an empty array with a length of 3


// Example: 
let myArray = [
  1, "Hello", true, [2, 4, 6],
  {
    name: "John",
    age: 30
  },
  function() {
    console.log("This is a function inside an array");
  }
];

console.log(myArray[3][1]); // Output: 4

myArray[5](); // Output: This is a function inside an array

// Accessing Array Elements
// Accessing array elements is possible using indices starting from 0 and incrementing by 1 for each subsequent element.
// For example:

const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // output: "apple"
console.log(fruits[1]); // output: "banana"
console.log(fruits[2]); // output: "orange"

//  Adding Element to an Array
The push() method inserts an element to the array's last index.
For example:
let myArray = [1, 2, 3];

// adds an element to the array end
myArray.push(4);

console.log(myArray); // output is: [1, 2, 3, 4]

// The unshift() method inserts an element at the beginning of the array.
// For example:
const fruits = ['banana', 'apple', 'orange'];
console.log(fruits); // ['banana', 'apple', 'orange']

fruits.unshift('grape');
console.log(fruits); // ['grape', 'banana', 'apple', 'orange']

// Changing Array Elements
// You can also modify elements or add new ones by accessing them through their index value in the array.

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // output: ['apple', 'banana', 'cherry']

fruits[1] = 'pear';
console.log(fruits); // output: ['apple', 'pear', 'cherry']

fruits[3] = 'orange';
console.log(fruits); // output: ['apple', 'pear', 'cherry', 'orange']

// Removing Array Element 
// By using the pop() method, you can remove the final element from the array while also receiving its returned value.
// For example:

let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.pop();  // removes 'orange' from the array and returns it
console.log(fruits);              // prints ['apple', 'banana']
console.log(removedFruit);        // prints 'orange'

// The shift() method will remove the first element and returns the removed element as its returned value.
// For example:

let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.shift();

console.log(fruits);         // Output: ['banana', 'orange']
console.log(removedFruit);   // Output: 'apple'
