const sumAll = function (...args) {
  const [start, end] = args.sort((a, b) => a - b);

  if (start < 0 || end < 0) return "ERROR";

  if (typeof start !== "number" || typeof end !== "number") return "ERROR";

  let sum = 0;

  for (i = start; i < end + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
