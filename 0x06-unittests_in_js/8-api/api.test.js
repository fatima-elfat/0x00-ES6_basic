const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865';
  it('GET /, return the message Welcome to the payment system', (done) => {
    request.get(`${url}/`, (error, reslt, body) => {
      expect(reslt.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
