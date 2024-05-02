var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
/***
 * Copy the file 1-calcul.test.js in a
 * new file 2-calcul_chai.test.js
 * Rewrite the test suite, using expect from Chai
 */
describe('calculateNumber', function () {
    describe('type == "SUM"', function () {
        it('should return 3', function () {
            chai.expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        });
        it('should return 4', function () {
            chai.expect(calculateNumber('SUM', 0.6, 3)).to.equal(4);
        });
        it('should return 5', function () {
            chai.expect(calculateNumber('SUM', 2, 3.4)).to.equal(5);
        });
        it('should return 6', function () {
            chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });
  
    describe('type == "SUBTRACT"', function () {
        it('should return -2', function () {
            chai.expect(calculateNumber('SUBTRACT', 3, 5.1)).to.equal(-2);
        });
        it('should return 0', function () {
            chai.expect(calculateNumber('SUBTRACT', 2, 2.0)).to.equal(0);
        });
        it('should return 2', function () {
            chai.expect(calculateNumber('SUBTRACT', 6.5, 5)).to.equal(2);
        });
    });
  
    describe('type == "DIVIDE"', function () {
        it('should return 0.2', function () {
            chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
        it('should return 2', function () {
            chai.expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
        });
        it('should return 5', function () {
            chai.expect(calculateNumber('DIVIDE', 14.6, 3)).to.equal(5);
        });
        it('should return Error', function () {
            chai.expect(calculateNumber('DIVIDE', 5.4, 0)).to.equal('Error');
        });
    });
  });

