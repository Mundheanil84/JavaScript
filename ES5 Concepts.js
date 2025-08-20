
// JavaScript ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, released in December 2009. It introduced several important features and concepts that were widely used before newer versions of JavaScript (ES6 and beyond) were introduced.

// “use strict”
// "use strict" is a directive in JavaScript that enforces strict mode, which helps catch common coding mistakes and prevents the use of certain unsafe features.

// Key Benefits:
// Prevents accidental global variables

"use strict";
x = 10; // Error: x is not defined

// Throws errors for unsafe actions
// Assigning to a non-writable property
// Deleting undeletable properties
// Using duplicate parameter names
// Disallows this as undefined in functions

"use strict";
function test() {
    console.log(this); // undefined (instead of `window` in non-strict mode)
}
test();

// How to Enable:

// Place "use strict"; at the beginning of a script or function:

"use strict"; // Whole script in strict mode
function myFunc() {
    "use strict"; // Strict mode only inside this function
}
 
// Multiline strings

// In ECMAScript 5 (ES5), you can use the backslash (\) to create multiline strings by escaping the line breaks.
// Here's the correct way to do it:

const multilineString = "This is a multiline string \
using the backslash to escape line breaks\
in JavaScript ES5.";
console.log(multilineString);

// Output
"This is a multiline string using the backslash to escape line breaks in JavaScript ES5."

// String trim().

// The trim() method in JavaScript removes whitespace from both ends (start and end) of a string but does not change the original string.
Syntax:

string.trim();

Example:

let str = "   Hello World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello World!"