const head = require('../head');
const assertEqual = require('../assertEqual');
// TEST CODE

console.log(head([1,2,3]));
console.log(head([]));
console.log(head([1]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
