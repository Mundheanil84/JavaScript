
// In JavaScript, a Set is a built-in object that allows you to store unique values of any type. This means that a Set can contain only distinct values, and any duplicate values are automatically ignored.
// Sets are often used when you need to work with collections of unique elements and perform set operations like union, intersection, and difference.

// Using the new keyword with the Set() constructor:
const mySet = new Set();

// Initializing a Set with an array containing initial values using the new keyword and the Set() constructor:
const fruitsArray = ['apple', 'banana', 'orange'];
const fruitsSet = new Set(fruitsArray);

// Using the Set Literal (Available from ECMAScript 6):
const mySet = new Set(['a', 'b', 'c']);

// Set Operations
// Here's an overview of how to work with JavaScript Sets:

// Adding and Removing Elements:
const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('apple');     // Ignored, as 'apple' is already in the Set
console.log(mySet);

mySet.delete('banana'); // Removes 'banana' from the Set
console.log(mySet);

mySet.clear();          // Removes all elements from a Set
console.log(mySet);

// Output
Set(3) { 'apple', 'banana', 'orange' }
Set(2) { 'apple', 'orange' }
Set(0) {}

// Checking if an Element is in the Set:
const mySet = new Set(['apple', 'banana', 'orange']);

console.log(mySet.has('banana'));
console.log(mySet.has('grape'));

// Output
true
false

// Getting the Size of the Set:
const mySet = new Set(['apple', 'banana', 'orange']);

console.log(mySet.size);

// Output
3

// Iterating through a Set:
const mySet = new Set(['apple', 'banana', 'orange']);

// Using forEach
mySet.forEach((value) => {
  console.log(value);
});

// Using for...of loop
for (const fruit of mySet) {
  console.log(fruit);
}

// Output
apple
banana
orange

apple
banana
orange

// Converting Set to Array:
const mySet = new Set(['apple', 'banana', 'orange']);

const fruitsArray = Array.from(mySet);
console.log(fruitsArray);

Output
[ 'apple', 'banana', 'orange' ]

//  Example:
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

const mySet = new Set();

mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size);

// Output : 2
// Even though obj1 and obj2 have the same contents, they are considered unique in the Set



