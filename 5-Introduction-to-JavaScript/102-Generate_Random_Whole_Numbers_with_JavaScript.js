// Math.random generates random decimals. Math.floor() rounds a number to the nearest whole number. By combining the two you can get a random whole number

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);