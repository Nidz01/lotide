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
Make the function compare the two values it takes in and print out a message telling us if they match or not. 
Use template literals when generating the output string.
*/
const assertEqual = function(actual, expected) {
  const pass = '✅️✅️✅️';
  const fail = '❌️❌️❌️';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Write a function named countOnly that will be given an array and 
 It will return an object containing counts of everything that 
 the input object listed. Only keys which have a truthy value should be 
 counted in the resulting object. All other strings (either set to false 
  or not included at all in the object) should not be counted. 
  That said, if a particular string is meant to be counted but 
  does not exist in the input array, it also does not have to be 
  included in the final count.
 */

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let key in itemsToCount) {
    let count = 0;
    if (itemsToCount[key]) {
      for (let item of allItems) {
        if (item === key) {
          count++;
        }
      }
    }
    if (count > 0) {
      result[key] = count;
    }
  }
  return result;
}

// TESTING CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
  ];
  
  const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
  });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Jason"], 2);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Karima"], 1);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Joe"], 1);
  assertEqual(result1["Joe"], undefined);
