/*
take a string and count the number of letters in it
*/

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


module.exports = countLetters;
