// you can have both local and global variables with the same name. But the local variable will take precedence (override) over the global variable

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();