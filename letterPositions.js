


/*function letterPositions which will return all the indices (zero-based positions) 
in the string where each character is found. For each letter, instead of returning 
just one number to represent its number of occurrences, multiple numbers may be needed 
to represent all the places in the string that it shows up.
*/
const letterPositions = function(string) {
  const result = {};
  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (!result[char]) {
      if (char !== " ") {
        result[char] = []
        result[char].push(index);
      }
    } else {
      result[char].push(index);
    }
  }
  return result;
}

module.exports = letterPositions;
