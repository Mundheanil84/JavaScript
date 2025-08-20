
// Mutator Methods
// These methods modify the original array.

// push(): Adds one or more elements to the end of an array and returns the new length.

let fruits = ['apple', 'banana'];
fruits.push('orange'); // fruits is now ['apple', 'banana', 'orange']

// pop(): Removes the last element from an array and returns that element.

let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // lastFruit is 'orange', fruits is now ['apple', 'banana']

// shift(): Removes the first element from an array and returns that element.

let fruits = ['apple', 'banana'];
let firstFruit = fruits.shift(); // firstFruit is 'apple', fruits is now ['banana']

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.

let fruits = ['banana'];
fruits.unshift('apple'); // fruits is now ['apple', 'banana']

// splice(): A powerful method that can add, remove, or replace elements at a specific position. It takes a starting index, the number of elements to delete, and optional elements to add.

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6); // Removes 1 element at index 2, adds 6. numbers is now [1, 2, 6, 4, 5]

// sort(): Sorts the elements of an array in place and returns the sorted array. By default, it sorts alphabetically for strings and treats numbers as strings. For numeric sorting, a compare function is needed.

let numbers = [3, 1, 2];
numbers.sort(); // numbers is now [1, 2, 3]

// Accessor Methods
// These methods do not modify the original array; they return a new array or a value.

// concat(): Merges two or more arrays and returns a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]

// slice(): Returns a new array containing a shallow copy of a portion of the original array. It takes a start and an optional end index.

let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(1, 4); // newNumbers is [2, 3, 4]

// join(): Joins all elements of an array into a string and returns that string.

let fruits = ['apple', 'banana'];
let fruitString = fruits.join(', '); // fruitString is 'apple, banana'

// Iterator Methods
// These methods loop through the array and perform an action on each element. They are a more modern and readable alternative to for loops.

// forEach(): Executes a provided function once for each array element. It does not return a value.

let fruits = ['apple', 'banana'];
fruits.forEach(fruit => console.log(fruit));
// Output: 'apple', 'banana'

// map(): Creates a new array populated with the results of calling a provided function on every element in the original array.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // doubled is [2, 4, 6]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0); // evens is [2, 4]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0); // sum is 10

// find(): Returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

let users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
let user = users.find(u => u.id === 2); // user is {id: 2, name: 'Jane'}

// findIndex(): Similar to find(), but returns the index of the first element that satisfies the test.

let users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
let userIndex = users.findIndex(u => u.id === 2); // userIndex is 1






