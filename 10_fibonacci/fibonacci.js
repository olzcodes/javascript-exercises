const fibonacci = function (position) {
  if (position < 0) return "OOPS";

  let numbers = [0, 1];

  for (i = 1; i <= position; i++) {
    let newNumber = numbers[numbers.length - 1] + numbers[numbers.length - 2];
    numbers.push(newNumber);
  }

  return numbers[position];
};

fibonacci(0);

// Do not edit below this line
module.exports = fibonacci;
