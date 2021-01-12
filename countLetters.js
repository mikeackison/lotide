const countLetters = function(string){
  // create an acumuator object to return
  let result = {}

  // accept a string parameter
  if (typeof string === 'string') {

  // iterate though the string
    for (let letter of string) {
      // if the letter is a space, skip it
      if (letter !== ' ') {
        
        // if the letter does not exist as a refrence in the return object,
        // add it as a key and count it's value starting at one
        if (!result[letter]) {

            result[letter] = 1

        // else if the letter does exist, add it to the value of the key

        } else {

          result[letter] += 1
        }
      }    
    } 

  } else {
    return "That isn't a string"
  }

 return result
}

module.exports = countLetters



