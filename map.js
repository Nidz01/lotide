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
Create a map function that takes two arguments, first "An array to map" and second "A callback function"
The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
//////////////////////////////////////////////////////////
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

/* TEST CASE*/

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//////////////////////////////////////////////////////////
const objects = [
  {name: "test",
  importance: 1
  }, 
  {name: "test1",
  importance: 5
  }
];
  const results2 = map(objects, object => object.name);
  console.log(results2);

  /* TEST CASE*/

  assertArraysEqual(results2, ["test", "test1"]);

//////////////////////////////////////////////////////////
const multiplier = [5, 6, 7, 8];
const results3 = map(multiplier, num => num * 10);
console.log(results3);

/* TEST CASE*/

assertArraysEqual(results3, [50, 60, 70, 80]);
//////////////////////////////////////////////////////////
