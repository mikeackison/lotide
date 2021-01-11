const assert = require('chai').assert;

// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('eqArrays', function() {
  it('should return "true" for "true"', function() {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
    
  })

  it('should return "true" for "true"', function() {
    assert.strictEqual(eqArrays(["Hello"], ["Hello"]), true)
    
  })


});

//determine if the arrays are the smae type of object? and the same length
// iterate thorough both arrays and compare
// can use hte same index for both, because they are the same length.