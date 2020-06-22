
/*
Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source that are not present in the itemsToRemove array. */

const without = function(original, itemsForRemoval) {
  let result = [...original];
  for (let i = 0; i < itemsForRemoval.length; i++) {
    for (let j = 0; j < original.length; j++) {
      if (itemsForRemoval[i] === original[j]) {
        result.splice(j, 1);
      } 
    }
  }
  return result;
};

module.exports = without;
