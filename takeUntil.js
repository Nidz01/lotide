
/*
Implement a function quite similar to this one, but isn't present in their library: takeUntil.
It will take in two parameters: array to work with and a callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value. 

Implement takeUntil which will keep collecting items from a provided array 
until the callback provided returns a truthy value. 

*/

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item)){
    results.push(item);
    }
    else {
      return results;
    }
  }
  return results;
}

module.exports = takeUntil;
