const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');


describe("assertArraysEqual", function () {
  it('returns ["Hello"] for ["Hello"]', function() {
    assert.strictEqual(assertArraysEqual(["Hello"], ["Hello"]));
  });

  it('returns [1, 2, 3] for [1, 2, 3]', function () {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  })

});
