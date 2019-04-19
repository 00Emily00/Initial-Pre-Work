// To fully make sure that your data doesn't change, you use Object.freeze to prevent data mutation. When the object is frozen, you can not add, update or delete properties from it. You will get an error if you try to do that

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();