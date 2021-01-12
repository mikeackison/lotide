const without = function(source, itemsToRemove) {

  // accept two parameters souce array, item to remove array
  // create an accumulator array, for the new array with only the remaining items, so the orignal is not changed
  let newWithoutArray = [];

  for (let item of source) {

    if (!itemsToRemove.includes(item)) {
      newWithoutArray.push(item);
    }
    // loop thorough source array
    // if itemsToRemove are NOT included in item list
    // push item into another array to not modify the source
  }
  return newWithoutArray;

};

module.exports = without

