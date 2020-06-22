
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const test = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

/*TEST CASES*/

assertArraysEqual(letterPositions("lighthouse in the house").l, test.l);
assertArraysEqual(letterPositions("lighthouse in the house").i, test.i);
assertArraysEqual(letterPositions("lighthouse in the house").g, test.g);
assertArraysEqual(letterPositions("lighthouse in the house").h, test.h);
assertArraysEqual(letterPositions("lighthouse in the house").t, test.t);
assertArraysEqual(letterPositions("lighthouse in the house").o, test.o);
assertArraysEqual(letterPositions("lighthouse in the house").u, test.u);
assertArraysEqual(letterPositions("lighthouse in the house").s, test.s);
assertArraysEqual(letterPositions("lighthouse in the house").e, test.e);
assertArraysEqual(letterPositions("lighthouse in the house").n, test.n);