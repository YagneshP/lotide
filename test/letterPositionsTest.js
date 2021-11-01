const assertArrayEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
//TEST//
let result1 = letterPositions('hello');
assertArrayEqual(result1['h'],[0]);
assertArrayEqual(result1['e'],[1]);
assertArrayEqual(result1['l'],[2,3]);
assertArrayEqual(result1['o'],[4]);
assertArrayEqual(result1['l'],[2]);