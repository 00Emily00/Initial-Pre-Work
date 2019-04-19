// == performs a type conversion so you are only really comparing the values, and === compares value and type (no type conversion involved). You can also find what the type of a variable is by using the typeof operator

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");