// ES6 makes destructuring arrays as easy as destructuring objects. With the spread operator you unpack all the content of the array and it is just a list separated by commas. You cannot pick and choose which elements you want to assign to variables. But with array destructuring you can. We can access any index in an array with destructuring by using commas to reach the desired index

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log("This should be b(6) " + a); // should be 6
console.log("This should be a(8) " + b); // should be 8