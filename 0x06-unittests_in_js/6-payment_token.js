const getPaymentTokenFromAPI = (success) => {
  if (success) {
	return new Promise((resolve) => {return Promise.resolve({data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromAPI;
