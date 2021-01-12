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

module.exports = findKey;