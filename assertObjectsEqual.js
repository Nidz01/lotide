const eqObjects = require('./eqObjects');
const eqObjects= require('./eqObjects');
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

 module.exports = assertObjectsEqual;
