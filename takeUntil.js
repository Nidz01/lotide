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
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. */

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Implement a function quite similar to this one, but isn't present in their library: takeUntil.
It will take in two parameters: array to work with and a callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value. 

Implement takeUntil which will keep collecting items from a provided array 
until the callback provided returns a truthy value. 

*/

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item)){
    results.push(item);
    }
    else {
      return results;
    }
  }
  return results;
}

/* TEST CASES */

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

///////////////////////////////////////////////////////////////
console.log('---');
///////////////////////////////////////////////////////////////

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === ',');

console.log(results2);

assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
