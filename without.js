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

/*
Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source that are not present in the itemsToRemove array. */

const without = function(original, itemsForRemoval) {
  let result = [...original];
  for (let i = 0; i < itemsForRemoval.length; i++) {
    for (let j = 0; j < original.length; j++) {
      if (itemsForRemoval[i] === original[j]) {
        result.splice(j, 1);
      } 
    }
  }
  return result;
};
/*Use assertArraysEqual to write test cases for various scenarios.  */

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3, 4], [3, 2]), [1, 4]);
assertArraysEqual(without(["1", 2, "3", 4], [3, 2]), ["1", 3, 4]);
assertArraysEqual(without([1, 9, 3, 4], [3, 2]), [1, 9, 4]);
assertArraysEqual(without(["dogs", 2, 3, 4], [3, 2]), ["dogs", 4]);
assertArraysEqual(without([], [3, 2]), []);

module.exports = without;




/*Alternate way to do it:
  const without = function(original, itemsForRemoval) {
  let result = original;
  original.forEach(function(item) {
    if (!itemsForRemoval.includes(item)) {
      result.push(item);
    }
  })*/
