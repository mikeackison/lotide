const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {

    if (firstParam[i] !== secondParam[i]) {
      return false;
    }


  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected} is true`);
  } else {
    console.log(`❌  Assertion Failed: ${actual} === ${expected} is false`);
  }
};

const middle = function(array) {
  // accept array with elements

  // create an accumulator
  let newArray = [];
  let index;
  // if array length is <=2 return empty array
  if (array.length <= 2) {
    return newArray;
  }
  // if array length is even array.length % 2 === 0
  // return an array with one element (the middle)
  if (array.length % 2 === 0) {

    index = array.length / 2;
    newArray.push(array[index - 1], array[index]);

    // else if/otherwise return an array with two elements (the middle)
  } else {
    index = Math.floor((array.length / 2));
    newArray.push(array[index]);

  }

  return newArray;
};

// accept array with elements
// create an accumulator
// if array length is <=2 return empty array
// if array length is even array.length % 2 === 0
// return an array with one element (the middle)
// else if return an array with two elements (the middle)


assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);



// console.log(middle([1, 2]) )
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]