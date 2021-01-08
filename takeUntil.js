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


const takeUntil = function(array, callback) {
  let newArray = []
  for (let word of array) {
    if (!callback(word)) {
      newArray.push(word)
    } else {
      break;
    }
  }
  return newArray;
}




// take in two parameters array, and the call back: get clairification on the call back =>

// funtion will return part of the array up until a point (modified, or new?)

// keep going until it returns a truthy value (reaches the condition?)

// callback will only be provided one value: the array

// Tip mentions looping, can stop once it reaches that point.



// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,  ['I\'ve', 'been', 'to', 'Hollywood' ]);
