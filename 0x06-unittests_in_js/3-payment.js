const Utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  return Utils.calculateNumber('SUM', totalAmount, totalShipping);
};

module.exports = sendPaymentRequestToApi;