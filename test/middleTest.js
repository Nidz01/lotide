const assert = require('chai').assert;
const middle = require('../middle');

// TEST CASES

describe("#tail", () => {
  it("returns [4] for [10, 6, 4, 2, 3]", () => {
    assert.deepEqual(middle([10, 6, 4, 2, 3]), [4]);
  });
  it("returns [6,4] for [10, 6, 4, 2]", () => {
    assert.deepEqual(middle([10, 6, 4, 2]), [6,4]); 
  });
});
