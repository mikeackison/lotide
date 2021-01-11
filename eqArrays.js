
const eqArrays = function(firstParam, secondParam) {
  if (firstParam.length !== secondParam.length) {
    return false;
  }
  for (let i = 0; i < firstParam.length; i++) {
   
    // since the indexes are the same length, we can use use one and compare
    // if they don't match, return false, otherwise keep looping until done and 
    // return true
    if (firstParam[i] !== secondParam[i]) {
      return false;

    }

  }
  return true;

};

module.exports = eqArrays 

//determine if the arrays are the smae type of object? and the same length
// iterate thorough both arrays and compare
// can use hte same index for both, because they are the same length.