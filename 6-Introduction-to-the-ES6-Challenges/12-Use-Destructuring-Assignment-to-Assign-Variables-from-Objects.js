// Destructuring assignment is special syntax for neatly assigning values taken directly from an object ot variables.  In other words, this makes it possible to unpack values from arrays, or properties from objects into distinct variables

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
    const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79