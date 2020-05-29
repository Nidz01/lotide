const assertEqual = function(actual, expected) {
  const pass = ':hourglass::hourglass::hourglass::hourglass:';
  const fail = ':octagonal_sign::octagonal_sign::octagonal_sign:';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const result = new Object();
  string = string.split(" ").join("");
  for (const char of string) {
    if (!result[char]) {
      result[char] = new Number();
      result[char]++;
    } else {
      result[char]++;
    }
  }
  return result;
}

console.log(countLetters('Nida is a girl'));