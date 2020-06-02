

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns Labs for [1, 2, 3]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });
  it("returns 'Yo Yo' for [Labs, Lighthouse, Yo Yo]", () => {
    assert.deepEqual(tail(["Labs", "Lighthouse", "Yo Yo"]), "Yo Yo"); 
  });

});













/*
const assertEqual = require('../assertEqual');
const tail = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/