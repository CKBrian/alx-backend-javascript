const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyUtils = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyUtils.calledWith('The total is: 10')).to.be.equal(true);
    stubUtils.restore();
    spyUtils.restore();
  });
});
