// There is also something a radix. Radix specifies the base of the number in the string. Radix pretty much states how that string should be parsed

function convertToInteger(str) {
  var i = parseInt(str, 2);
  return i;
}

convertToInteger("10011");