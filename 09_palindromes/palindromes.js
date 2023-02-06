const palindromes = function (string) {
  const stringArray = Array.from(string.toUpperCase());
  const stringArrayFilter = stringArray.filter(
    (letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90
  );
  // console.log(stringArrayFilter);

  let stringArrayFilterReverse = stringArrayFilter.reverse();
  // console.log(stringArrayFilterReverse);

  return (
    JSON.stringify(stringArrayFilter) ===
    JSON.stringify(stringArrayFilterReverse)
  );
};

// Do not edit below this line
module.exports = palindromes;
