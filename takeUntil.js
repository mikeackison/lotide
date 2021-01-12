const takeUntil = function(array, callback) {
  let newArray = []
  for (let word of array) {
    // the callback checks a function that returns a boolean
    if (!callback(word)) {
      newArray.push(word)
    } else {
      break;
    }
  }
  return newArray;
}

// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = takeUntil



// take in two parameters array, and the call back: get clairification on the call back =>

// funtion will return part of the array up until a point (modified, or new?)

// keep going until it returns a truthy value (reaches the condition?)

// callback will only be provided one value: the array

// Tip mentions looping, can stop once it reaches that point.




