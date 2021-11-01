const assertArrayEqual = require('../assertArraysEqual');
const without = require('../without');

const words = ['hello', 'world', 'lighthouse'];
const result = without(['1','2','3'],[1,2, '3']);
const result2 = without(words,['lighthouse']);

assertArrayEqual(result, ['1','2']);
assertArrayEqual(words, ['hello', 'world', 'lighthouse']);
assertArrayEqual(result2, ['hello', 'world']);
assertArrayEqual(result2,['lighthouse']);