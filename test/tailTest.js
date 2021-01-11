const assert = require('chai').assert;

const tail = require('../tail');

describe("tail", function() {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);

  });

  it('returns [2, 3] for [1, 2, 3]', function () {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);

  });

});