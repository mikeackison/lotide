const eqArrays = function (firstParam, secondParam) {

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

const eqObjects = function (object1, object2) {
  // accept two parameters of objects to evaluate

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // if objects keys are not the same length, stop going and return false
    return false;
  }

  // loop through the key of one of the objects
  for (const key in object1) {
  
    // evealuate if objects values are arrays, if true (true is implicit at this point) go into the function eqArrays.
    if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
      // eqArrays if a funtions that returns a boolean; if true (true is implicit), return true
      if (eqArrays(object1[key], object2[key])) {
        return true;
      }
      // if object1 value not equal to object2 value that is true (true is implicit), return false
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  //  if you made it this far they are true, so return true
  return true;

};




const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)} is true`);
  } else {
    console.log(`❌  Assertion Failed: ${inspect(actual)} === ${inspect(expected)} is false`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba)
assertObjectsEqual(cd, cd2)