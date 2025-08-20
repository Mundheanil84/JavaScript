
// What is JSON?
// JSON (JavaScript Object Notation) is a lightweight, text-based format used for data exchange. It is designed to be easily readable by both humans and machines, making it an efficient way to transmit data between a server and a web application. JSON is often used as an alternative to XML due to its simplicity and widespread support across programming languages.

// Key Features of JSON
// Lightweight & Readable: Uses a simple syntax based on key-value pairs.
// Language-Independent: Supported by multiple programming languages, making it ideal for APIs and web services.
// Structured & Organized: Follows a strict format that ensures consistency.

// Example: JSON Data Representation
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "isMarried": false,
  "hobbies": ["reading", "painting", "traveling"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "country": "USA"
  }
}

// Working with JSON in JavaScript
// JavaScript provides built-in methods to convert data between JSON format and JavaScript objects:

// JSON.stringify() → Converts a JavaScript object into a JSON-formatted string.
// JSON.parse() → Converts a JSON-formatted string back into a JavaScript object.
// Example 1: Convert JavaScript Object to JSON String

const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};

const jsonStr = JSON.stringify(person);
console.log(jsonStr);

// Output
'{"name":"John Doe","age":30,"email":"john@example.com"}'

// Example 2: Convert JSON String to JavaScript Object

const jsonString = '{"name":"John Doe","age":30,"email":"john@example.com"}';

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.email);

// Output
"John Doe"
30
"john@example.com"
