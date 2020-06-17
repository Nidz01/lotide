/* Function that checks if incoming arrays are equal and
then return true (if equal) and false(if false) accordingly. */

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/* Function that calls eqArrays function to check if incoming arrays are equal and
then displays a message accoridngly. */

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const test = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

/*TEST CASES*/

assertArraysEqual(letterPositions("lighthouse in the house").l, test.l);
assertArraysEqual(letterPositions("lighthouse in the house").i, test.i);
assertArraysEqual(letterPositions("lighthouse in the house").g, test.g);
assertArraysEqual(letterPositions("lighthouse in the house").h, test.h);
assertArraysEqual(letterPositions("lighthouse in the house").t, test.t);
assertArraysEqual(letterPositions("lighthouse in the house").o, test.o);
assertArraysEqual(letterPositions("lighthouse in the house").u, test.u);
assertArraysEqual(letterPositions("lighthouse in the house").s, test.s);
assertArraysEqual(letterPositions("lighthouse in the house").e, test.e);
assertArraysEqual(letterPositions("lighthouse in the house").n, test.n);
