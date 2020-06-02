const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const takeUntil = require('./takeUntil')
const without = require('./without');
const map = require('./map');
const eqObjects = require('./eqObjets');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  countLetters,
  countOnly,
  takeUntil,
  without,
  map,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions
};