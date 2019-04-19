// JavaScript also has a greater than (>) operator just like in math. If the number on the left is greater than the right, then it's true, otherwise it returns false.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);