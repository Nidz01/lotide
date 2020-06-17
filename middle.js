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

/* Implement middle which will take in an array and 
return the middle-most element(s) of the given array. */

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let firstMiddleValue = array[Math.floor(array.length / 2) - 1];
    let secondMiddleValue = array[Math.floor(array.length / 2)];
    return [firstMiddleValue, secondMiddleValue];
  } else {
    let middleIndex = array[Math.floor(array.length / 2)];
    return [middleIndex];
  }
}

assertArraysEqual(middle([10, 6, 4, 2, 3]), [4]);
assertArraysEqual(middle([10, 6, 4, 2, 3]), [5]);
assertArraysEqual(middle([10, 6, 4, 2]), [6, 4]);
assertArraysEqual(middle([10, 6, 4, 2]), [10, 6]);

module.exports = middle;

