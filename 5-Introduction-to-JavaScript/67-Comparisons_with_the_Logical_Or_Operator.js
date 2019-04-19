// logical or ( || ) operator is true if any statements in the if statement is true, then it will evaluate to true, otherwise, it's false. For example if you have oranges || apples then it's true

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);