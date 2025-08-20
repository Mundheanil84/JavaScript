
// Explicit Conversion in JavaScript
// Explicit Type Conversion is the developer's manual conversion of one data type to another using built-in conversion functions. It is also known as typecasting.

//1. Convert to Number Explicitly: In JavaScript, you can utilize Number() to convert numeric strings and Boolean values into numbers.

let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324^(e-1)')
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

//NaN will be the result if a string is not a valid number. 

let result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// You can also generate numbers from strings using parseInt(), parseFloat(), unary operator +, and Math.floor()

let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

// Convert to String Explicitly

// In JavaScript, you can convert non-string data types to strings using either String() or toString().
//number to string
let result;
result = String(325);
console.log(result);  // "325"

result = String(2 + 5);
console.log(result); // "7"

//other data types to string
result = String(undefined);
console.log(result); // "undefined"

result = String(null);
console.log(result); // "null"

result = String(true);
console.log(result); // "true"

result = String(NaN);
console.log(result); // "NaN"

//using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// Note: String() takes null and undefined and converts them to string. However, toString() gives errors when null is passed.

// 3. Convert to Boolean Explicitly
// You can use Boolean() to convert other data types to a Boolean in JavaScript. The conversion rules state that undefined, null, 0, NaN, and '' will convert to false.

let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

//All other values give true.
result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true
