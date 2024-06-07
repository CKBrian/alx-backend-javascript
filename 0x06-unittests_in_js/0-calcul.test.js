const calculateNumber = require('./0-calcul');
const assert = require('assert');

it('should add two numbers: both numbers not rounded', () => {
  const res = calculateNumber(1, 3);
  assert.strictEqual(res, 4);
});
it('should add two numbers: second number rounded', () => {
  const res = calculateNumber(1, 3.7);
  assert.strictEqual(res, 5);
});
it('should add two numbers: first number rounded', () => {
  const res = calculateNumber(1.5, 3);
  assert.strictEqual(res, 5);
});
it('should add two numbers: both numbers rounded', () => {
  const res = calculateNumber(1.5, 3.7);
  assert.strictEqual(res, 6);
});
it('should add two numbers MAX and MIN JavaScript numbers', () => {
  assert.strictEqual(calculateNumber(Number.MAX_VALUE, Number.MIN_VALUE), Number.MAX_VALUE);
});
