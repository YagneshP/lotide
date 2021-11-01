
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2,3] for [1,2,3]',() => {
    let arr = [1,2,3];
    let expected = [2,3];
    let actual = tail(arr);
    assert.deepEqual(actual, expected);
  });
  it('should not change the original array', () => {
    let arr = [1,2,3];
    let expected = [2,3];
    let actual = tail(arr);
    assert.deepEqual(arr, [1,2,3]);
  });
  it('should return [] for [1]', () => {
    let arr = [1];
    let actual = tail(arr);
    assert.isEmpty(actual,'An array with only one element should yield an empty array for its tail');
  });
  it('should return [] for []', () => {
    let arr = [];
    let actual = tail(arr);
    assert.isEmpty(actual,'An empty array should yield an empty array for its tail');
  });
});