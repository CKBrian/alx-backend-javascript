const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber type = SUM', () => {
  it('should ADD two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should add two numbers: both numbers not rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('should add two numbers: second number rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should add two numbers: first number rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
  });
  it('should add two numbers: both numbers rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should add two numbers MAX and MIN JavaScript numbers', () => {
    assert.strictEqual(calculateNumber('SUM', Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE);
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
