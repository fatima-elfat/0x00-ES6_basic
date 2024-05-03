const request = require('request');
const { expect } = require('chai');
/***
 * Add a new test suite for the cart page:
 * Correct status code when :id is a number?
 * Correct status code when :id is NOT a number (=> 404)?
 * etc.
 * 
 * Add a test suite for the /login endpoint
 * Add a test suite for the /available_payments endpoint
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

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${url}/available_payments`, (error, result, body) => {
      expect(result.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({
          payment_methods: {credit_cards: true, paypal: false}
	});
      done();
    });
  });

  it('POST /login', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Luffy'}},
      (error, result, body) => {
        expect(result.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Luffy');
        done();
      });
  });
});
