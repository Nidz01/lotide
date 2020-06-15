const assertEqual = function(actual, expected) {
  const pass = '✅️✅️✅️';
  const fail = '❌️❌️❌️';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual("Nida", "Nida");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);

module.exports = assertEqual;
