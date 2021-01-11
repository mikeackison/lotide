const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // should FAIL


//determine if the arrays are the smae type of object? and the same length
// iterate thorough both arrays and compare
// can use hte same index for both, because they are the same length.