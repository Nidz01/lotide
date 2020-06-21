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


module.exports = assertEqual;
