// Sometimes you want to collect the elements into separate arrays and you can do that with the Rest operator, but just add other variables to the function. Example const [...arr] = [1,2,3,4,5] is all the values inside the array. But const [a,b,...arr] = [1,2,3,4,5]. a=1,b=2, ...arr=[3,4,5]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];