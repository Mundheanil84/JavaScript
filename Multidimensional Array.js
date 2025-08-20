
//  Multidimensional Array
// A multidimensional array is an array that holds one or more arrays as its elements.
// For instance:

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Create a Multidimensional Array
// Example: We have created a 2-dimensional array called myArray with three rows and two columns. Each row is an array containing two strings.
const myArray = [];
myArray.push(["apple", "orange"]);
myArray.push(["grape", "pear"]);
myArray.push(["pineapple", "mango"]);

console.log(myArray);   

// Access Elements of Multidimensional Array
// The elements belonging to the multidimensional array can be accessed using indices (0, 1, 2, etc.).
// For example:

let x = [
['Jack', 24],
['Sara', 25],
['Peter', 26]
];

// accessing the first item
console.log(x[0]); // ["Jack", 24]

// accessing the first item of the first inner array
console.log(x[0][0]); // Jack

// accessing the second item of the third inner array
console.log(x[2][1]); // 26

