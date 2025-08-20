
// n JavaScript, a Map is a built-in object that allows you to store key-value pairs, where each key can be of any data type, and each value can also be of any data type. Maps are useful for associating data and performing lookups based on specific keys.
 
// Map Creation
// You can create a Map in JavaScript using the new keyword with the Map() constructor.

const myMap = new Map();

// Map Operations
// Adding and Removing Entries: To add key-value pairs to a Map, you can use the .set() method, and to remove entries, you can use the .delete() method.

const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap);

myMap.delete('age');
console.log(myMap);

myMap.clear();
console.log(myMap);

// Output
Map(2) { 'name' => 'John', 'age' => 30 }
Map(1) { 'name' => 'John' }
Map(0) {}

// Getting the Size of the Map: You can use the .size property to get the number of entries in the Map.

const myMap = new Map([
  ['name', 'John'],
  ['age', 30]
]);

console.log(myMap.size);

// Output
2

// Checking if a Key Exists: To check if a specific key exists in the Map, you can use the .has() method.

const myMap = new Map([
  ['name', 'John'],
  ['age', 30]
]);

console.log(myMap.has('name'));
console.log(myMap.has('gender'));

// Output
true
false

// Getting the Value for a Key: To retrieve the value associated with a specific key, you can use the .get() method.

const myMap = new Map([
  ['name', 'John'],
  ['age', 30]
]);

console.log(myMap.get('name'));
console.log(myMap.get('age'));

// Output
"John"
30

// Iterating through a Map: You can use various methods to iterate through the entries of a Map, such as forEach() and for...of loop.

const myMap = new Map([
  ['name', 'John'],
  ['age', 30]
]);

// Using forEach
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Using for...of loop
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Output
name: John
age: 30

name: John
age: 30

// Converting Map to Array: To convert a Map into an array of key-value pairs, you can use the Array.from() method.

const myMap = new Map([
  ['name', 'John'],
  ['age', 30]
]);

const entriesArray = Array.from(myMap);
console.log(entriesArray);

// Output
[ [ 'name', 'John' ], [ 'age', 30 ] ]