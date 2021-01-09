const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);

  }

};


const findKey = function(object, callback) {
  // take in two paramenters, an object and a callback function
  // use the looping struckture from earlier

  for (const key in object) {
    // the callback checks a function that returns a boolean
    if (callback(object[key])) {
      // if it matches, return the key
      return key;
    }
  }
  return undefined;
  // if no key matches the value return undefined
};



let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


assertEqual(results1, "noma");