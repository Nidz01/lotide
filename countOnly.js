

/* Write a function named countOnly that will be given an array and 
 It will return an object containing counts of everything that 
 the input object listed. Only keys which have a truthy value should be 
 counted in the resulting object. All other strings (either set to false 
  or not included at all in the object) should not be counted. 
  That said, if a particular string is meant to be counted but 
  does not exist in the input array, it also does not have to be 
  included in the final count.
 */

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let key in itemsToCount) {
    let count = 0;
    if (itemsToCount[key]) {
      for (let item of allItems) {
        if (item === key) {
          count++;
        }
      }
    }
    if (count > 0) {
      result[key] = count;
    }
  }
  return result;
}
  
  module.exports = countOnly;
