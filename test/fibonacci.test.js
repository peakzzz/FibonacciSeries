var chai = require('chai');
var assert = chai.assert;

var fib = require('../js/index.js');
var calcFibonacci = fib.calcFiboNth;

describe('addClass', function () {

  it('0th fibonacci number should be 1', function () {
    var result = calcFibonacci(0);
    assert.equal(result, '1');
  });

  it('1st fibonacci number should be 1', function () {
    var result = calcFibonacci(1);
    assert.equal(result, '1');
  });

  it('9th fibonacci number should be 34', function () {
    var result = calcFibonacci(9);
    assert.equal(result, '34');
  });

  it('-1st fibonacci number should not exist', function () {
    var result = calcFibonacci(-1);
    assert.equal(result, null);
  });

  it('abc fibonacci number should not exist', function () {
    var result = calcFibonacci('abc');
    assert.equal(result, null);
  });

});
