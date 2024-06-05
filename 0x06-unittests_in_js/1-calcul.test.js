const assert = require('assert');
const calculateNumber = require('./1-calcul');
/***
 * Create a file 1-calcul.test.js
 * that contains test cases of this function
 * You can assume a and b are always number
 * Usage of describe will help you to organize your test cases
 */
describe('calculateNumber', function () {
    describe('type == "SUM"', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber('SUM', 1, 2), 3);
        });
        it('should return 4', function () {
            assert.equal(calculateNumber('SUM', 0.6, 3), 4);
        });
        it('should return 5', function () {
            assert.equal(calculateNumber('SUM', 2, 3.4), 5);
        });
        it('should return 6', function () {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });
  
    describe('type == "SUBTRACT"', function () {
        it('should return -2', function () {
            assert.equal(calculateNumber('SUBTRACT', 3, 5.1), -2);
        });
        it('should return 0', function () {
            assert.equal(calculateNumber('SUBTRACT', 2, 2.0), 0);
        });
        it('should return 2', function () {
            assert.equal(calculateNumber('SUBTRACT', 6.5, 5), 2);
        });
    });
  
    describe('type == "DIVIDE"', function () {
        it('should return 0.2', function () {
            assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
        it('should return 2', function () {
            assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
        });
        it('should return 5', function () {
            assert.equal(calculateNumber('DIVIDE', 14.6, 3), 5);
        });
        it('should return Error', function () {
            assert.equal(calculateNumber('DIVIDE', 5.4, 0), 'Error');
        });
    });
  });
