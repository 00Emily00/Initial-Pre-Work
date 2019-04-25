// You can define functions inside of objects. With ES6 there is no need to say function() for the program to know you are talking about a function. You can just say name() {} instead of name: function() {}

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);