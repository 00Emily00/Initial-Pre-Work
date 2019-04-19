// 2 scopes in JavaScript: global and local. By declaring variables globally, you are putting them outside a function and it is accessible by anything in the JavaScript code. You can also declare variables in the global scope if you don't use the var keyword. Global variables might not always be the best thing because it could affect your code in a way you don't want it to.

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}