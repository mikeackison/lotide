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


const without = function(source, itemsToRemove) {

  // accept two parameters souce array, item to remove array
  // create an accumulator array, for the new array with only the remaining items, so the orignal is not changed
  let newWithoutArray = [];

  for (let item of source) {

    if (!itemsToRemove.includes(item)) {
      newWithoutArray.push(item);
    }
    // loop thorough source array
    // if itemsToRemove are NOT included in item list
    // push item into another array to not modify the source
  }
  return newWithoutArray;

};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, "3"], [1, 2]), ["3"]);

const words = ["hello", "world", "lighthouse"];
console.log(words);

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log("Without function: ", without(words, ["lighthouse"]));

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, "3"], [1, 2]), ["3"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

