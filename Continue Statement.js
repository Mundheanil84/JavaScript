
// continue Statement
// The continue statement in JavaScript is employed within loops to bypass the current iteration and proceed to the subsequent iteration of the loop. 

// Example of using continue statement

for (var i = 1; i <= 5; i++) {
  // Skip iteration if i is odd
  if (i % 2 !== 0) {
    continue; // continue statement used here
  }

  console.log("Iteration: " + i);
}

console.log("Exited the loop.");

