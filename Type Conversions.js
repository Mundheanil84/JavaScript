// Type Conversions
// In JavaScript, there are two types of conversions: Implicit(type coercion) and Explicit(type conversion).

// Implicit Type Conversion in JavaScript:  Implicit Type Conversion is the automatic conversion of data types done by JavaScript during expressions evaluation. This type of conversion occurs when JavaScript expects one data type but gets another. For example, when a string is concatenated with a number, JavaScript implicitly converts the number to a string.

// Example 1: Numeric string used with + gives string type

let numStr = "10";
let result = numStr + 5;
console.log(typeof result); // string

// Example 2: Implicit Conversion to Number

let numStr = "10";
let result1 = numStr - 5;
let result2 = numStr / 2;
let result3 = numStr * 3;
console.log(typeof result1); // number
console.log(typeof result2); // number
console.log(typeof result3); // number

// Example 3: If a Boolean is used, true is 1, false is 0

let bool = true;
let result = bool + 5;
console.log(typeof result); // number
console.log(result); // 6
// Note that JavaScript considers 0 as false and all non-zero numbers as true. If true is converted to a number, then the result is always 1.

// Example 4: null is zero when used with the number

let nullVal = null;
let result = nullVal + 5;
console.log(typeof result); // number
console.log(result); // 5