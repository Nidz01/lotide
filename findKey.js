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

/*
Implement the function findKey which takes in an object and a callback. 
It should scan the object and return the first key for which the callback returns a truthy value. 
If no key is found, then it should return undefined. 
*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    };
  }
}

/* TEST CASE */

const hills = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

assertEqual(findKey(hills, x => x.stars === 2), "noma"); // => "noma"

///////////////////////////////////////////////////

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, x => x === "The Wire"), "drama");
