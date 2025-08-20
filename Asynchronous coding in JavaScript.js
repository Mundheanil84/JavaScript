
// Samantha was a software developer who had just started working on a new project. She was excited to be working with JavaScript. Still, she quickly realized that she would need to learn about asynchronous programming if she was going to build a responsive and fast application.
// At first, Samantha found asynchronous programming to be challenging. She was used to writing code that executed linearly, from top to bottom. But with asynchronous programming, she had to deal with code that was executed out of order and callbacks that fired at unpredictable times.
// However, she was determined to learn, so she dove into the topic headfirst. She started by learning about callbacks, promises, and async/await. She also learned about the event loop, which was responsible for managing the execution of asynchronous code in JavaScript.
// She discovered that asynchronous programming could make her application more responsive and faster. By using callbacks and promises, she could avoid blocking the main thread of the application, which could cause the application to freeze or become unresponsive.
 
// JavaScript is one of the most popular programming languages used to build interactive web applications. It is known for being synchronous, single-threaded and event-driven, which means it executes one task at a time in a specific order. However, to create a seamless user experience, JavaScript allows us to handle multiple tasks asynchronously—like loading data from a server while still responding to user interactions.
// How JavaScript Works: The Execution Model
// JavaScript follows a single-threaded model, meaning it has one call stack and can execute only one task at a time. But wait—how does JavaScript handle long-running tasks like fetching data from a server or waiting for a user’s input without freezing the entire application?
// That's where asynchronous programming comes in!
// Imagine a chef (JavaScript) in a restaurant kitchen. If the chef cooked only one order at a time and refused to take new orders until the first one was done, the restaurant would be painfully slow! Instead, the chef prepares multiple dishes in parallel, keeping an eye on each while waiting for some to cook.
// JavaScript achieves this using its Web APIs and event loop.

// Understanding the Event Loop
// JavaScript uses an event loop to manage asynchronous tasks efficiently. Here's a simple way to visualize it:
// Call Stack: This is where JavaScript keeps track of function execution.
// Web APIs: These are provided by the browser to handle tasks like setTimeout, fetching data, and handling events.
// Callback Queue: Once an asynchronous task is completed, its callback function moves to this queue.
// Event Loop: The event loop continuously checks the call stack. If it's empty, it pushes the next function from the callback queue to be executed.

Example : 

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");

// Callbacks: The Backbone of Asynchronous JavaScript
// A callback is a function passed as an argument to another function. It allows asynchronous tasks to execute in the background and trigger the callback when completed.

Example: 
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback();
  }, 3000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);


