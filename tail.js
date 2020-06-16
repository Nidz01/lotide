const assertEqual = function(actual, expected) {
  const pass = '✅️✅️✅️';
  const fail = '❌️❌️❌️';
  if(actual.length === expected.length) {
    let i=0;
  while (i < actual.length){
    if (actual[i] === expected[i]){
      i++;
      if(i === actual.length) {
       console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
      }
    }
  }
   } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
cassertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
*/

/*
The tail is meant to be every element except the head (first element) of the array.
Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
Your function should not modify the array that is passed in. It should return a new array.
*/
const tail = function(array)
{
const newArray = array.slice(1);
return newArray;
};


module.exports = tail;
