const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);

  }

};

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


// accept a string parameter
// creat an acumuator to return
// iterate though the string
// if the letter does not exist as a refrence in the object, add it as a key and count it's value starting at one
// else if the letter does exist, add it to the value of the key
// if the letter is a space, skip it
// return the object

let result1 = countLetters("bananas")
console.log(result1)
let result2 = countLetters(13452)
console.log(result2)
let result3 = countLetters("lighthouse in the house")
console.log(result3)

assertEqual(result1['b'], 1)
assertEqual(result1['a'], 3)
assertEqual(result2, "That isn't a string")
assertEqual(result3['h'], 4)

