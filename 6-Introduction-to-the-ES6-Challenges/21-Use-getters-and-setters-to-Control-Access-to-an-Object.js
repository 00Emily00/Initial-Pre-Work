// You can obtain values from an object (getter) and set (setter) a value of a property within an object. Getters are meant to return the value of an object's private variable to the user without the user directly accessing the private variable. Setters are meant to modify the value of an object's private variable based on the value passed into the setter function. This can involve calculations or even overwriting the previous value.Even though getters and setters are functions, we can use them as if they are not even functions

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit) {
      this.Fahrenheit = temp;
    }
    get celsius() {
      return this.Fahrenheit;
    }
    set celsius(temp) {
      this.Fahrenheit = temp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C