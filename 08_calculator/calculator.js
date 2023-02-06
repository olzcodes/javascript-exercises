const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (array) {
  return array.reduce((acc, cur) => acc * cur);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1;
  for (i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
