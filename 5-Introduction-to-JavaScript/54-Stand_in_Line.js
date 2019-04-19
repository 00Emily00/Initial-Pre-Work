// I learned that in computer Science a queue is an abstract Structure where items are kept in order. New items (values or data) can be added to the back of the queue and old items can be taken off from the front of the queue

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));