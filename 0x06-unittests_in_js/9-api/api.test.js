const request = require('request');
const { expect } = require('chai');
/***
 * Add a new test suite for the cart page:
 * Correct status code when :id is a number?
 * Correct status code when :id is NOT a number (=> 404)?
 * etc.
 *
 */
describe('Integration Testing', () => {
  const url = 'http://localhost:7865';
  it('GET / code 200', (done) => {
    request.get(`${url}/`, (error, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/20 returns code 200', (done) => {
    request.get(`${url}/cart/20`, (error, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 20');
      done();
    });
  });

  it('GET /cart/i20 returns code 404 ', (done) => {
    request.get(`${url}/cart/i20`, (error, result, body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/-1 returns code 404 negative id', (done) => {
    request.get(`${url}/cart/-1`, (error, result, body) => {
      expect(result.statusCode).to.be.equal(404);
      done();
    });
  });
});
