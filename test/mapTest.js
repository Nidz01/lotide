const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//////////////////////////////////////////////////////////
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

/* TEST CASE*/

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//////////////////////////////////////////////////////////
const objects = [
  {name: "test",
  importance: 1
  }, 
  {name: "test1",
  importance: 5
  }
];
  const results2 = map(objects, object => object.name);
  console.log(results2);

  /* TEST CASE*/

  assertArraysEqual(results2, ["test", "test1"]);

//////////////////////////////////////////////////////////
const multiplier = [5, 6, 7, 8];
const results3 = map(multiplier, num => num * 10);
console.log(results3);

/* TEST CASE*/

assertArraysEqual(results3, [50, 60, 70, 80]);
//////////////////////////////////////////////////////////