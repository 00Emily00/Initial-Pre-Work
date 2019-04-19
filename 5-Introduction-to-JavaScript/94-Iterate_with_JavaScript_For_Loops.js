// Another type of JavaScript loop is the for loop. It will run a code for a specific amount of times. The syntax is for([initialization]; [condition]; [final-expression]). Initialization executes one time before loop starts. It's used to define and set up loop variables. Condition statement is evaluated at the beginning of every loop and will continue as long as it is true. When it reads false, it won't execute the code, it will just exit the loop. The final-expression is executed at the end of each loop, before the next iteration starts.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}