const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {

  let spyLogging;
  
  beforeEach(() => {
    spyLogging = sinon.spy(console, 'log');
  })

  afterEach(() => {
    spyLogging.restore();
  })

  it('should call sendPaymentRequestToAPI with 100, and 20:', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyLogging.calledWith('The total is: 120')).to.be.equal(true);
    expect(spyLogging.calledOnce).to.be.true;
  });

  it('should call sendPaymentRequestToAPI with 10, and 10:', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyLogging.calledWith('The total is: 20')).to.be.equal(true);
    expect(spyLogging.calledOnce).to.be.true;
  });

});
/*

    The first test will call sendPaymentRequestToAPI with 100, and 20:
        Verify that the console is logging the string The total is: 120
        Verify that the console is only called once
    The second test will call sendPaymentRequestToAPI with 10, and 10:
        Verify that the console is logging the string The total is: 20
        Verify that the console is only called once
Requirements:

    You should be able to run the test suite using npm test 5-payment.test.js
    Every test should pass without any warning
    You should use only one spy to complete this exercise
    You should use a beforeEach and a afterEach hooks to complete this exercise

*/