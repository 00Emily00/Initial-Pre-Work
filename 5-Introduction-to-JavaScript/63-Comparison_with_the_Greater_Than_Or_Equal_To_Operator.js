// There is also a greater than or equal to operator ( >= ) which means the same thing in math. If the value on the left is greater or equal to the value on the right, then it's true.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);