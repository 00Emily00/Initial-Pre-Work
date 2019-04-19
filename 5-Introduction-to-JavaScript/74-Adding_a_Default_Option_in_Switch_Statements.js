// just like we have the else statement, in switch we have the default statement. You add the default statement and its condition and will execute if no matching case statements are found.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a": answer = "apple";
    break;
    case "b": answer = "bird";
    break;
    case "c": answer = "cat";
    break;
    default: answer = "stuff"
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);


