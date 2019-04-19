// if you declare lets say an array with const, you can still change things that are inside the array, you just can't change the array itself. (you cannot point to a different array)

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();