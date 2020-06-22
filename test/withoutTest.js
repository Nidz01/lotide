const assert = require('chai').assert;
const without = require('../without');

/*Use assertArraysEqual to write test cases for various scenarios.  */

describe("#without", () => {
  it("returns [hello, world, lighthouse] for [hello, world, lighthouse] && [lighthouse]", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world", "lighthouse"]);
  });
  it("returns '[1, 4]' for [1, 2, 3, 4] && [3, 2]", () => {
    assert.deepEqual(without([1, 2, 3, 4], [3, 2]), [1, 4]);
  });
  it("returns ['1', 3, 4] for ['1', 2, '3', 4] && [3, 2]", () => {
    assert.deepEqual(without(["1", 2, "3", 4], [3, 2]), ["1", 3, 4]);
  });
  it("returns '['dogs', 4]' for [1, 9, 3, 4] && [3, 2]", () => {
    assert.deepEqual(without([1, 9, 3, 4], [3, 2]), [1, 9, 4]);
  });
  it("returns '[1, 4]' for ['dogs', 2, 3, 4] && [3, 2]", () => {
    assert.deepEqual(without(["dogs", 2, 3, 4], [3, 2]), ["dogs", 4]);
  });
  it("returns '[]' for [] && [3, 2]", () => {
    assert.deepEqual(without([], [3, 2]), []);
  });
});

