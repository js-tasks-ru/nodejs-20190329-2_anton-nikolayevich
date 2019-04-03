"use strict";

function sum(a, b) {
  if(typeof(a) != "number") {
    throw new TypeError("Value 'a' is not a number");
  }
  if(typeof(b) != "number") {
    throw new TypeError("Value 'b' is not a number");
  }
  const result = a + b;
  return result;
}

module.exports = sum;
