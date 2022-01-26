// QUnit test suite 
const QUnit = require('qunit');
const doesCartWinPrize = require('./index');

// Overall correct implementation
QUnit.test('Test 1', function(assert) {
  assert.deepEqual(doesCartWinPrize([-1, 124, .4]), true);
  assert.deepEqual(doesCartWinPrize([10, 20, -6, 100, .9]), false);
});

// Proper type casting
QUnit.test('Test 2', function(assert) {
  assert.deepEqual(doesCartWinPrize(['12', '3.4']), false);
  assert.deepEqual(doesCartWinPrize(['01.4', '122']), true);
});

// Tricky numbers
QUnit.test('Test 3', function(assert) {
  //123.39999999999999
  assert.deepEqual(doesCartWinPrize([123.1, .3]), true);
  //123.4 - (123.1+.31) = -0.009999999999990905
  assert.deepEqual(doesCartWinPrize([123.1, .31]), false);
});
