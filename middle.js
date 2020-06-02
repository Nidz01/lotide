
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

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ There is no middle: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
/*assertArraysEqual(middle([10, 6, 4, 2, 3]), [4]);*/

module.exports = middle;

