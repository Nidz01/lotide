const eqArrays = require('./eqArrays');

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

 module.exports = eqObjects;
