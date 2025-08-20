
// JavaScript setTimeout() and setInterval()
// JavaScript setTimeout() and setInterval() are two methods used for scheduling and executing functions asynchronously after a specified time interval.
// setTimeout(): This method is used to execute a function once after a specified delay (in milliseconds). It takes two parameters: the function to be executed and the delay time.


Syntax:
setTimeout(function, delay);

Example:

// Write a program to display the text After 3 Second
// display a text using the setTimeout method

function greet() {
  console.log('This will appear next. Hello World!');
}

setTimeout(function() {
  console.log("This message appears after 3 seconds");
  greet();
}, 3000);

// Output
"This message appears after 3 seconds"
"This will appear next. Hello World!"

// The setTimeout() method in the aforementioned software invokes the greet() function after 3000 milliseconds (3 second).
// As a result, after 3 seconds the application only displays the text "This will appear next. Hello World!" once.
 

// It is possible to provide extra arguments to the setTimeout() method.

Syntax:

setTimeout(function, delay, arg1, arg2, ...);

// In this syntax, the first parameter is the function that will be executed after the specified delay. The second parameter is the delay time in milliseconds.
// Any additional parameters after the delay time will be passed to the function as arguments. These arguments can be accessed inside the function using the arguments object.

Example:
function sayHello(name, message) {
  console.log(`Hello, ${name}! ${message}`);
}

setTimeout(sayHello, 3000, "John", "How are you?");

// Output
Hello, John! How are you?     // After 3 seconds

// setInterval(): This method is used to repeatedly execute a function with a fixed time delay between each execution. It takes two parameters: the function to be executed and the time interval (in milliseconds).

Syntax:
setInterval(function, interval);

Example:
// Display Time Every 3 Second

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  console.log(timeString);
}

setInterval(displayTime, 3000);

// Output
"12:3:55"
"12:3:59"
"12:4:2"
"12:4:5"
"12:4:7"
"12:4:10"
.
.
.
..



// JavaScript clearTimeout() and clearInterval()
// In JavaScript, clearTimeout() and clearInterval() are methods used to cancel scheduled function executions set by setTimeout() and setInterval(), respectively.
// clearTimeout(): In JavaScript, clearTimeout() is a method used to cancel a scheduled function execution set by setTimeout(). It clears the timer before the specified function gets a chance to execute, preventing its invocation.

Syntax:
clearTimeout(timerId);

Example:
function sayHello() {
  console.log("Hello, World!");
}

const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)

// Now, if you want to cancel the execution of the sayHello function before it runs:

clearTimeout(timerId);

// clearInterval(): In JavaScript, clearInterval() is a method used to cancel a repetitive function execution set by setInterval(). It stops the repetitive invocation of the specified function at the specified intervals.

Syntax:
clearInterval(intervalId);

// Here, intervalId is the numeric ID returned by the setInterval() function when scheduling the repetitive execution of a function. By passing the intervalId to clearInterval(), the associated interval is canceled, and the function will no longer execute repeatedly.

Example:
let count = 0;

function displayCount() {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalID);
    console.log("Interval stopped.");
  }
}

let intervalID = setInterval(displayCount, 1000);