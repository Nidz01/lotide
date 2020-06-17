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

/*
Implement the definition for function eqObjects which will take in two objects and 
returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
*/
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
}

/*
Implement assertObjectsEqual which will take in two objects 
and console.log an appropriate message to the console. 
*/
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌️❌️❌️' Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

/* TEST CASES */

 assertObjectsEqual({a: [1]}, { a: [1]});
 assertObjectsEqual({a: 1}, { a: [1]});
 assertObjectsEqual({a: "1", b: 2}, {b: 2,  a: "1"});
