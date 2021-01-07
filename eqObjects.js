const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);

  }

};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);



// const cd2ObjectKeyc = "1"
// const cdObjectKeyc = '1'
// assertEqual(eqArrays(cd2ObjectKeyc, cdObjectKeyc), true);

// console.log(Array.isArray(cd["d"])) // returns true
// console.log(Array.isArray(cd2["d"])) // returns true

// const cd2ObjectKeyd = ["2", 3, 4]
// const cdObjectKeyd = ["2", 3]
// assertEqual(eqArrays(cd2ObjectKeyd, cdObjectKeyd), false);

