let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));
let operator = prompt('Enter the operator (+, -, *, /):');
let result;

// Check for valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Invalid input: Please enter valid numbers.');
} else {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Error: Division by zero is not allowed.');
      } else {
        result = num1 / num2;
      }
      break;
    default:
      console.log('Invalid operator');
  }

  if (result !== undefined) {
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
  }
}
