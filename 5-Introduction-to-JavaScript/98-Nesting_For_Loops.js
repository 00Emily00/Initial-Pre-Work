// Just like you can nest objects, arrays, elements, and pretty much a lot of things in programming, you can also nest for loops (for loops inside of for loops). You can access the sub-arrays by creating a for loop for the most outer array, and then another for loop to access the nested array

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log("The product is " + product);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);