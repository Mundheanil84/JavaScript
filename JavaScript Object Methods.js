
// JavaScript objects are collections of properties, and properties can be either values or functions. Functions that are attached to objects are called object methods.

// Object.keys(): This method returns an array of all the keys (property names) of an object.
const myObj = { name: "John", age: 30 };
const keys = Object.keys(myObj);

console.log(keys);

// Output
["name", "age"]

// Object.values(): This method returns an array of all the values of an object.
const myObj = { name: "John", age: 30 };
const values = Object.values(myObj);

console.log(values);

// Output
["John", 30]

// Object.entries(): This method returns an array of arrays, where each sub-array contains a key-value pair of the object.
const myObj = { name: "John", age: 30 };
const entries = Object.entries(myObj);

console.log(entries);

// Output
[["name", "John"], ["age", 30]]

// Object.assign(): This method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
const targetObj = { name: "John" };
const sourceObj = { age: 30 };
Object.assign(targetObj, sourceObj);

console.log(targetObj);

// Output
{
  name: "John",
  age: 30
}

// Object.freeze(): This method is used to prevent an object from being modifying.
const myObj = { name: "John", age: 30 };
Object.freeze(myObj);
myObj.age = 40; // This will not modify the object

console.log(myObj)

// Output
{
  name: "John",
  age: 30
}

// Custom method: An object can contain a function as one of its properties. These functions are called methods when they are attached to an object.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  startEngine: function() {
    console.log("Engine started!");
  }
};

car.startEngine();

// Output
"Engine started!"

// Accessing Object Methods

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Accessing Object Property
console.log(person.name);

// Accessing Object Method
person.greet();

// Adding Object Methods
// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello

