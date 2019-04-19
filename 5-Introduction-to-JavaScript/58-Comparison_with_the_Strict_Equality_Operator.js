// There is also an === operator (strict equality). The difference between that and == is that for strict equality you are comparing the values and the type (string, number etc.) So if the type is different, then it's false

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);