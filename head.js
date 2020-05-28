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

const head = function(array)
{
let string = array[0];
return string;
}
console.log(head([1,2,3]))
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");