// using var to declare variables can cause some problems when creating a bigger application. With var you can override the value it is assigned to. 'let' is another way of declaring variables. The great thing about 'let' is that it can not be overriden and you will get an error if you try to do so. if you add "use strict" at the top of the page, it will enable strict mode which catches common coding mistakes/unsafe actions like forgetting to declare a variable name.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();