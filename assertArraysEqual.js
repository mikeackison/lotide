

const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {
  
    if (firstParam[i] !== secondParam[i]) {
      return false;
    }
    
  return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected} is true`);
  } else {
    console.log(`❌  Assertion Failed: ${actual} === ${expected} is false`);
  }
};


assertArraysEqual(["Hello"], [1,2,3,4])
assertArraysEqual(["Hello"], ["Hello"])
