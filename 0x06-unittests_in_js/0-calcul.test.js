const {calculateNumber} = require('./0-calcul');
const assert = require('assert');

it('should add two numbers', () => {
  let res = calculateNumber(2.1, 2.5);
  assert.strictEqual(res, 5);
});
