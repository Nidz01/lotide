const assertEqual = require('./assertEqual');

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
/*console.log(head([1,2,3]))
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");*/

module.exports = head;