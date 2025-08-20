
// What are JavaScript Operators?
// An operator is a special symbol that performs operations on operands (values and variables).

// For example,
console.log(2 + 3); // 5

// + is what we call an operator that does the adding, and 2 and 3 are the numbers we're adding together.
// Operators are used to performing various operations.
// Operators can be used to assign values, compare values, and perform arithmetic operations.

// JavaScript Operator Types
// 1. Assignment Operators
// 2. Arithmetic Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Other JavaScript Operators

// 1. Assignment Operators
// Values can be assigned to variables by making use of assignment operators. For example,

const x = 5;

// 2. Arithmetic Operators
// Operators used for performing arithmetic calculations are known as Arithmetic Operators, which include the following:

const number = 3 + 5; // 8

let num1 = 5;
let num2 = 3;

// addition
console.log('num1 + num2 = ', num1 + num2);  // 8

// subtraction
console.log('num1 - num2 = ', num1 - num2);  // 2

// multiplication
console.log('num1 * num2 = ', num1 * num2);  // 15

// division
console.log('num1 / num2 = ', num1 / num2);  // 1.6666666666666667

// remainder
console.log('num1 % num2 = ', num1 % num2);   // 2

// increment
console.log('++num1 = ', ++num1); // num1 is now 6
console.log('num1++ = ', num1++); // prints 6 and then increased to 7
console.log('num1 = ', num1);     // 7

// decrement
console.log('--num1 = ', --num1); // num1 is now 6
console.log('num1-- = ', num1--); // prints 6 and then decreased to 5
console.log('num1 = ', num1);     // 5

//exponentiation
console.log('num1 ** num2 =', num1 ** num2);

//3. Comparison Operators

const a = 3, b = 2;
console.log(a > b); // true
 
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

// 4. Logical Operators

const x = 5, y = 3;
(x < 6) && (y < 5); // true

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

// 5. String Operators

let str1 = "Hello";
let str2 = "world!";
let result = str1 + " " + str2; // concatenation using the + operator
console.log(result);            // Output: "Hello world!"

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

let age = 18;
let canVote;

if (age >= 18) {
  canVote = "Yes";
} else {
  canVote = "No";
}

console.log(canVote); // Output: Yes

const num = 42;
const str = "Hello, World!";
const bool = true;
const obj = { key: "value" };
const arr = [1, 2, 3];
const func = function () {};
const und = undefined;
const nul = null;

console.log(typeof num);  // Output: "number"
console.log(typeof str);  // Output: "string"
console.log(typeof bool); // Output: "boolean"
console.log(typeof obj);  // Output: "object"
console.log(typeof arr);  // Output: "object" (arrays are objects in JavaScript)
console.log(typeof func); // Output: "function"
console.log(typeof und);  // Output: "undefined"
console.log(typeof nul);  // Output: "object" (this is considered a historical bug in JavaScript)

// 6. Bitwise Operators

const a = 5; // 0101 in binary
const b = 3; // 0011 in binary

// Bitwise AND
console.log(a & b); // 1 (0001 in binary)

// Bitwise OR
console.log(a | b); // 7 (0111 in binary)

// Bitwise XOR
console.log(a ^ b); // 6 (0110 in binary)

// Bitwise NOT
console.log(~a); // -6 (1010 in binary)

// Left shift
console.log(a << 1); // 10 (1010 in binary)

// Right shift
console.log(a >> 1); // 2 (0010 in binary)

