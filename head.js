/*
Create a function head which returns the first item in the array.
Use assertEqual to write test cases for various scenarios. 
// TEST CODE
assertEqual("Nida", "Nida");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);
*/
const head = function(array)
{
let string = array[0];
return string;
}

module.exports = head;
