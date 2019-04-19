// When you are not going to reuse a certain function anywhere else (when there is no need to call another function) then you can create something called an annonymous function. Instead of writing function() you can just use the arrow =>. If there is no body, just a return value, you can just do the arrow => and write what you would return. All this is called an inline function.

const magic = () => {
  "use strict";
  return new Date();
}