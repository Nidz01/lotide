const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

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