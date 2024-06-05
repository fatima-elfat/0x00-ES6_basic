const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
/***
 * Imagine that calling the function Utils.calculateNumber
 * is actually calling an API or a very expensive method.
 * You don’t necessarily want to do that on every test run
 * Stub the function Utils.calculateNumber to always return the same number 10
 * Verify that the stub is being called with type = SUM, a = 100, and b = 20
 * Add a spy to verify that console.log
 * is logging the correct message The total is: 10
 */
describe('sendPaymentRequestToApi', () => {
  it('using stub', () => {
    
    const sUtils = sinon.stub(Utils, 'calculateNumber');
    sUtils.returns(10);
    const sConsole = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(sUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(sConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
    sUtils.restore();
    sConsole.restore();
  });
});
