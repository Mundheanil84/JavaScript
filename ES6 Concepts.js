
// ES6 (ECMAScript 2015) is the sixth major release of the ECMAScript language specification for JavaScript. It brought significant improvements and new features to the language, making JavaScript more expressive, powerful, and developer-friendly.

// Some of the key concepts introduced in ES6 include:

// Arrow Function (covered before)
// Spread and Rest Operators
// Template Literals 
// let and const Declarations (covered before)
// Array Destructuring
// Object Destructuring
// Modules

// Spread and Rest Operators
// Exampl1: Copying an Array
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers); // [1, 2, 3]

// Example 2: Merging Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4]

// Example 3: Copying and Updating Objects
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };

console.log(updatedPerson); // { name: "Alice", age: 25, city: "New York" }/

//Example 4: Spreading Function Arguments
function sum(a, b, c) {
    return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

// Rest Operator (...) – Collects elements
// The rest operator is used to gather multiple values into an array.

// Example 1: Collecting Function Arguments
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

