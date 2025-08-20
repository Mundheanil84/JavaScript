
// In JavaScript, the switch statement is a type of control structure that allows you to execute different code blocks based on different conditions. It is a convenient alternative to using multiple if-else statements when you need to check the value of a single variable or expression against multiple possible values.

// The basic syntax of a switch statement is as follows:

switch(expression) {
  case value1:
	    // Executes this code block if the expression matches value1
    break;
  case value2:
	    // Executes this code block if the expression matches value1
    break;
  case value3:
	    // Executes this code block if the expression matches value1
    break;
  default:
	    // Executes this code block if none of the previous cases match
}

// Let's look at an example to better understand how the switch statement works:

let dayOfWeek = 5;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName); // Output: "Friday"