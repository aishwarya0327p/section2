const assert = require('assert');
const calculate = require('./calculator');

function runTests() {
  // Test addition
  assert.strictEqual(calculate(2, 3, '+'), 5, 'Addition failed');

  // Test subtraction
  assert.strictEqual(calculate(5, 3, '-'), 2, 'Subtraction failed');

  // Test multiplication
  assert.strictEqual(calculate(4, 3, '*'), 12, 'Multiplication failed');

  // Test division
  assert.strictEqual(calculate(10, 2, '/'), 5, 'Division failed');

  // Test division by zero
  assert.throws(
    () => calculate(10, 0, '/'),
    /Division by zero is not allowed\./,
    'Division by zero should throw an error'
  );

  // Test invalid operator
  assert.throws(
    () => calculate(10, 2, '^'),
    /Invalid operator: \^/,
    'Invalid operator should throw an error'
  );

  console.log('All tests passed successfully!');
}

runTests();
