const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {
  
    if (firstParam[i] !== secondParam[i]) {
      return false;
    }
  
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected} is true`);
  } else {
    console.log(`❌  Assertion Failed: ${actual} === ${expected} is false`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word.length);

const results3 = map(words, word => word[2]);


assertArraysEqual((results1), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual((results2), [ 6, 7, 2, 5, 3 ])
assertArraysEqual((results3), [ 'o', 'n', undefined, 'j', 'm' ])
