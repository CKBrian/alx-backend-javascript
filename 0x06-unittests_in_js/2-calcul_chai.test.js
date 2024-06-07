const calculateNumber = require('./2-calcul');
const assert = require('assert');
const expect = require('chai').expect;

describe('calculateNumber type = SUM', () => {
  it('should ADD two numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('should add two numbers: both numbers not rounded', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should add two numbers: second number rounded', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should add two numbers: first number rounded', () => {
    expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
  });
  it('should add two numbers: both numbers rounded', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should add two numbers MAX and MIN JavaScript numbers', () => {
    expect(calculateNumber('SUM', Number.MAX_VALUE, Number.MIN_VALUE)).to.equal(Number.MAX_VALUE);
  });

});

describe('calculateNumber type = SUBTRACT', () => {
  it('should SUBTRACT two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe('calculateNumber type = DIVIDE', () => {
  it('should DIVIDE two whole rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should DIVIDE two numbers with one zero number as divident', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
