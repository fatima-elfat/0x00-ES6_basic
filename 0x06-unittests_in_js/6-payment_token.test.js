const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
/***
 * How to test the result of getPaymentTokenFromAPI(true)?
 */
describe('getPaymentTokenFromAPI', () => {
  it('it is resolved correctly', (done) => {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.include({
		  data: 'Successful response from the API'
	  });
          done();
        })
        .catch((error) => done(error));
    });
});
