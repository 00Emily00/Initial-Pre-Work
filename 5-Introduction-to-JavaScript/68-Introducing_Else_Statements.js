// an else statement can be used along with the if statement. else statement is an alternate block of code that can be executed. So if the if statement is false, it moves on to look at the else statement.

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);