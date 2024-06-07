const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
    spyUtils.restore();
  });
});
