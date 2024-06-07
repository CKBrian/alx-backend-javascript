const expect = require('chai').expect;
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  beforeEach( () => {
    spyAsync = sinon.spy();
  });

  it('should test an async function', (done) => {
    getPaymentTokenFromAPI(true).then( (data) => {
      expect(data).to.equal({data: 'Successful response from the API' });
    });
    done();
  });
});
