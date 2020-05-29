const assertEqual = function(actual, expected) {
  const pass = ':hourglass::hourglass::hourglass::hourglass:';
  const fail = ':octagonal_sign::octagonal_sign::octagonal_sign:';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);