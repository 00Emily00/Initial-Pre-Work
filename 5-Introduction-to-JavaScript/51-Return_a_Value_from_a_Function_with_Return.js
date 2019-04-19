// When you return something in a function, you are allowing that value or data to have the ability to be used somewhere else outside the function it was created in.

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(arg1) {
  return arg1 * 5;
}

console.log(minusSeven(10));
console.log(timesFive(3));