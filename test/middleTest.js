const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CASES

assertArraysEqual(middle([10, 6, 4, 2, 3]), [4]);
assertArraysEqual(middle([10, 6, 4, 2, 3]), [5]);
assertArraysEqual(middle([10, 6, 4, 2]), [6, 4]);
assertArraysEqual(middle([10, 6, 4, 2]), [10, 6]);
