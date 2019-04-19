// Not all functions have to have a return statement. When you call a function that doesn't have a return statement, it will process the inner code, but the return value will be undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();