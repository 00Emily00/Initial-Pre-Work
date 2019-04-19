// You can also compare things with the Comparison Operator. This operator returns either true or false. The most commonly used is == (equality operator). This compares two values and returns true if they are equivalent. So just = sign assigns a value at the right to a variable at the left, == actually compares and converts types to be the same

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);