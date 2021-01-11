
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

module.exports = middle
