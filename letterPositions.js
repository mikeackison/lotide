const letterPositions = function(sentence) {
  // create an acumuator to return

  const results = {};
  // accept a string as a paramenter
  if (typeof sentence !== 'string') {
    console.log("that wans't a string");
    return results;
  }
    
  // iterate though the string
  for (let i = 0; i < sentence.length; i++) {
     
    let char = sentence[i];

    // if the letter does not exist as a refrence in the object,
    // create it as a key and
    if (!results[char]) {
      results[char] = [];
    }

    // otherwise the letter does exist, push it's index locattion to the value array
    results[char].push(i);

  }
  return results;
};

module.exports = letterPositions

// accept a string as a paramenter
// create an acumuator to return
// iterate though the string
// if the letter does not exist as a refrence in the object, add it as a key and count it's index value starting at one
// otherwise the letter does exist, add it's index locattion to the arrayv alue
// if the letter is a space, skip it
// return the object