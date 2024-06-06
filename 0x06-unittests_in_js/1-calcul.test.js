const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber type = SUM', () => {
	it('should ADD two numbers', () => {
	  assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
	});
});

describe('calculateNumber type = SUBTRACT', () => {
	it('should SUBTRACT two numbers', () => {
	  assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});
});

describe('calculateNumber type = DIVIDE', () => {
	it('should DIVIDE two whole rounded numbers', () => {
	  assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});

	it('should DIVIDE two numbers with one zero number as divident', () => {
	  assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});

