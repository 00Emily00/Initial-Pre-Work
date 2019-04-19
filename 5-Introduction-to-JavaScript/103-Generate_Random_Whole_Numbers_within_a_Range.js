// instead of just defining the max number and only generating a number between 0 and a given number you can also generate a whole number between two numbers using the max and min,

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)  ) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);