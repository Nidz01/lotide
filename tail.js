
/*
The tail is meant to be every element except the head (first element) of the array.
Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
Your function should not modify the array that is passed in. It should return a new array.
*/
const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

module.exports = tail;
