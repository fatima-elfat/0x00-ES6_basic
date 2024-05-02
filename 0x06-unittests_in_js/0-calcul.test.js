const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('shoud return 3', () => {
      assert.strictEqual(calculateNumber(2.0, 1.0), 3);
    });
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(2.8, 1), 4);
    });
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.39, 3.39), 6);
    });
    it('should return 7', function () {
      assert.strictEqual(calculateNumber(3.0, 3.9), 7);
    });
    it('should return 8', function () {
      assert.strictEqual(calculateNumber(4.9, 3.0), 8);
    });
});

