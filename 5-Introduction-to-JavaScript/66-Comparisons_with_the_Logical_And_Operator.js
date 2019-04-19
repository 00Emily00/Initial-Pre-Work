// Sometimes you need to test more than one thing at a time. The logical and (&&) operator will do that. For example if you are 20 years old && have black hair, then it's true. You can nest two if statements to create this, but you can also just use one if statement and have the && in between both statements.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);