// you can also declare variables using the const keyword. const does the same thing let does, but the extra thing const has is that it can not be reassigned. It's constant, and it will not change.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");