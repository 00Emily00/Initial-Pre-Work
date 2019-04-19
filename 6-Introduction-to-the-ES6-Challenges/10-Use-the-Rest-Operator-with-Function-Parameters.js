// The rest operator  (...args) allow us to represent indefinite number of arguments as an array. Rest operator eliminates the need to check the args array and allows us to apply those high order functions (map(), filter() etc)

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6