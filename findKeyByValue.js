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
Implement the function findKeyByValue which takes in an object and a value. 
It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined.
*/

const findKeyByValue = function(object, value) {
  let result;
  for (const key in object) {
    if (object[key] === value) {
      result = key;
      return result;
    }
  }
  return result;
}
 const bestTVShowsByGenre = {
   sci_fi: "The Expanse",
   comedy: "Brooklyn Nine-Nine",
   drama: "The Wire"
 };

 /* Test Cases */
 
 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
