// Instead of using a lot of if/else statements, you can just use something called a switch statement. Switch statements just reduce the amount of repetition. A switch statement tests a value and can have many case statements which define various possible values. The statement is executed from the first matched case value until it encounters a break.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1: answer = "alpha";
    break;
    case 2:  answer = "beta";
    break;
    case 3: answer = "gamma";
    break;
    case 4: answer = "delta";
    break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);