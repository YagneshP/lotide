const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should returns [2] for [1,2,3]', () => {
    let arr = [1,2,3];
    let actual = middle(arr);
    let expected = [2];
    assert.deepEqual(actual,expected);
  });
  it('should returns [2,3] for [1,2,3,4]', () => {
    let arr = [1,2,3,4];
    let actual = middle(arr);
    let expected = [2,3];
    assert.deepEqual(actual,expected);
  });
  it('should returns [] for []', () => {
    let arr = [];
    let actual = middle(arr);
    assert.isEmpty(actual,'An empty array yield an empty array for its middle');
  });
  it('should returns [] for [1]', () => {
    let arr = [1];
    let actual = middle(arr);
    assert.isEmpty(actual,'An array with single element yield an empty array for its middle');
  });
  it('should returns [] for [1,2]', () => {
    let arr = [1,2];
    let actual = middle(arr);
    assert.isEmpty(actual,'An array with only two elements yield an empty array for its middle');
  });
  it('should not return [2] for [1,2,3,4]',() => {
    let arr = [1,2,3,4];
    let actual = middle(arr);
    assert.notDeepEqual(actual,[2]);
  });
  it('should not return [1] for [1,2]',() => {
    let arr = [1,2];
    let actual = middle(arr);
    assert.notDeepEqual(actual,[1]);
  });
});
