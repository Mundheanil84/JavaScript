
// JavaScript's Object type is a data type that can be used to store collections of key-value pairs and more complex entities. Keys are also called properties of an object.

// In this example, person is an object with three properties: firstName, lastName, and age.
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Object literal method
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(person.firstName);
console.log(person.age);


// Object constructor method
let person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

console.log(person.firstName);
console.log(person.age);

// Accessing Object Properties

// Using dot Notation: Dot notation is used to access properties of an object using the dot (.) operator, followed by the property name. Syntax for Dot Notation is objectName.key.

let person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

console.log(person.name);
console.log(person.age);
console.log(person.occupation);

// Output : "John" , 30,"Developer"

// Using bracket Notation: Bracket notation is used to access object properties using square brackets ([ ]), with the property name as a string inside the brackets. Syntax for Bracket Notation is objectName["propertyName"].
Example:

let person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

console.log(person['name']);
console.log(person['age']);
console.log(person['occupation']);