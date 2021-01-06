const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);

  }

};

const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {
   
    // since the indexes are the same length, we can use use one and compare
    // if they don't match, return false, otherwise keep looping until done and 
    // return true
    if (firstParam[i] !== secondParam[i]) {
      return false;

    }

  }
  return true;

};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // should FAIL


//determine if the arrays are the smae type of object? and the same length
// iterate thorough both arrays and compare
// can use hte same index for both, because they are the same length.