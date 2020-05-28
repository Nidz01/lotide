const assertEqual = function(actual, expected) {
  const pass = ':hourglass::hourglass::hourglass::hourglass:';
  const fail = ':octagonal_sign::octagonal_sign::octagonal_sign:';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual("Nida", "Nida");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);

const tail = function(array)
{
let string = array[array.length-1];
return string;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
