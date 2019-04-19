// using the hasOwnProperty(propname) can help us see if a given object actually exists or not. This method returns true or false. You cannot use a variable with dot notation on an object.

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else
      return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");