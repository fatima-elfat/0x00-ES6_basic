const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
/***
 * Inside the same describe, create 2 tests:
 * The first test will call sendPaymentRequestToAPI with 100, and 20:
 * Verify that the console is logging the string The total is: 120
 * Verify that the console is only called once
 * The second test will call sendPaymentRequestToAPI with 10, and 10:
 * Verify that the console is logging the string The total is: 20
 * Verify that the console is only called once
 */

describe('sendPaymentRequestToApi', () => {
  let sConsole;
  beforeEach(function () {
    sConsole = sinon.spy(console, 'log');
  });
  afterEach(function () {
    sConsole.restore();
  });

  it('with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(sConsole.calledOnce).to.be.true;
  });

  it('with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(sConsole.calledOnce).to.be.true;
  });
});
