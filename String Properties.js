
// JavaScript Strings are immutable
// In JavaScript, strings are immutable, meaning their characters cannot be changed. 

let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"

// You can assign a variable name to a new string.

let a = 'hello';
a = 'Hello';
console.log(a); // "Hello"

// JavaScript String is Case-Sensitive
// It's important to remember that capitalizing letters matters. Lowercase and uppercase letters are treated as separate values. 

const a = 'a';
const b = 'A'
console.log(a === b); // false

// In JavaScript, remember that a and A are considered distinct values.
// JavaScript String Length
// To determine the length of a string, you can utilize the built-in length property. 

const a = 'hello';
console.log(a.length); // 5