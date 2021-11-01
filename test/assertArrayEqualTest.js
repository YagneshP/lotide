const assertArrayEqual = require('../assertArraysEqual');

assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([1,2,3],[1,2,'3']);
assertArrayEqual([],[]);
assertArrayEqual([1,2,3],[1,2]);