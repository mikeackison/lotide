
const assert = require('chai').assert;
const head = require('../head');


describe("head", function () {
  it("returns 1 for [1, 2, 3]", function() {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", function() {
    assert.strictEqual(head(['5']), '5'); 
  });
  
});



// old code to be removed once all tests pass
// assertEqual(head([5,6,7]), 5);
// const assertEqual = require('../assertEqual');
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");