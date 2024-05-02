const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('shoud return 4 as int', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0), 4);
    });
});

