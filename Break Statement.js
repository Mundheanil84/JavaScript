
// break Statement
// The break statement in JavaScript is employed to prematurely terminate a loop prior to the loop condition being fulfilled. It can be used with for, while, and do-while loops.

// Example 1: break with for Loop

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Example 2: break with while Loop

let i = 1;
while (i <= 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}

