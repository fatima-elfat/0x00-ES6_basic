const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
/***
 * By using sinon.spy, make sure the math used for
 * sendPaymentRequestToApi(100, 20) is the same
 * as Utils.calculateNumber('SUM', 100, 20)
 * (validate the usage of the Utils function)
 */
describe('sendPaymentRequestToApi', () => {
  it('calculateNumber method of Utils', () => {
    const sUtils = sinon.spy(Utils, 'calculateNumber');
    const sConsole = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(sUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(sConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    sUtils.restore();
    sConsole.restore();
  });
});
