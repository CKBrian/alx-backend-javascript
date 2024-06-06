const calculateNumber = require('./0-calcul');
const assert = require('assert');

it('should add two numbers', () => {
  let res = calculateNumber(1, 3);
  assert.strictEqual(res, 4);
});
it('should add two numbers', () => {
  let res = calculateNumber(1, 3.7);
  assert.strictEqual(res, 5);
});
it('should add two numbers', () => {
  let res = calculateNumber(1.2, 3.7);
  assert.strictEqual(res, 5);
});
it('should add two numbers', () => {
  let res = calculateNumber(1.5, 3.7);
  assert.strictEqual(res, 6);
});
