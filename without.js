const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {

    if (firstParam[i] !== secondParam[i]) {
      return false;
    }

    return true;
  }
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
  
  // loop thorough source array
  // push into another array to not modify the source
  for (let i = 0; i < source.length; i++) {
    newWithoutArray.push(source[i]);
  }

  for (let i = 0; i < newWithoutArray.length; i++) {
      
    // loop though item to remove array
    for (let j = 0; j < itemsToRemove.length; j++) {

      // if element in source array matches in remove array, splice them out of newArray using index
    
      if (newWithoutArray[i] === itemsToRemove[j]) {
        newWithoutArray.splice(i, 1);
        i--;
      }
    }
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





// const without = function(source, itemsToRemove) {

//   // accept two parameters souce array, item to remove array
//   // create an accumulator array, for the new array with only the remaining items, so the orignal is not changed
//   let newWithoutArray = [];

//   // loop thorough source array
//   for (let i = 0; i < source.length; i++) {
//     // console.log(typeof(source[i]))
      

//     // loop though item to remove array
//     for (let j = 0; j < itemsToRemove.length; j++) {

//       // if element in source array is not in remove array, push them into newArray

//       if ((source[i] !== itemsToRemove[j]) && (typeof(source[i]) == typeof(itemsToRemove[j])) ) {
//         newWithoutArray.push(source[i]);
//       }
//     }
//   }
//   return newWithoutArray;

// };

// const without = function(source, itemsToRemove) {

//   // accept two parameters souce array, item to remove array
//   // create an accumulator array, for the new array with only the remaining items, so the orignal is not changed
//   let newWithoutArray = [];

//   // loop thorough source array
//   for (let i = 0; i < source.length; i++) {
//     // console.log(typeof(source[i]))
      

//     // loop though item to remove array
//     for (let j = 0; j < itemsToRemove.length; j++) {

//       // if element in source array is not in remove array, push them into newArray

//       console.log("source")
//       console.log(source[i])

//       console.log("itemsToRemove")
//       console.log(itemsToRemove[j])

//       console.log("newWithoutArray")
//       console.log(newWithoutArray)

      
//       console.log("Source ", typeof(source[i]), source[i])
      
//       console.log("Remove ", typeof(itemsToRemove[j]), itemsToRemove[j])


//       console.log("i = ", i)

//       console.log("j = ", j)
//       if ((source[i] !== itemsToRemove[j]) && (typeof(source[i]) == typeof(itemsToRemove[j])) ) {
//         newWithoutArray.push(source[i]);
//       }
//     }
//   }
//   return newWithoutArray;

// };

