// without the break between each case, it will look at all the cases until there is a break encountered. It is possible to have multiple cases that just end with the same result/return

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
      answer = "High";
    break;
    default:
      answer = "";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);