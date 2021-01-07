const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);

  }

};

const findKeyByValue = function(object, value) {
  // take in an object and a value
  
  // iterate through and return the first key that returns the given value
  // genre is a placeholder - while using the for in loop we iterate through the objects keys
  // object[genre] will return the values (names of shows) (genre the keys) could also use key as a placeholder
  for (const genre in object) {

    if (object[genre] === value) {
      // console.log(genre, object[genre])
      return genre
    }
    
  }
  return undefined
  // if no key matches the value return undefined
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");


// Implement the function findKeyByValue which takes in an object and a value. 
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

// take in an object and a value
// iterate through and return the first key that returns the given value
