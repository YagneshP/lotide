const takeUntil = require('../takeUntil');
const assertArrayEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results1, [1,2,5,7,2]);
assertArrayEqual(results1, []);
assertArrayEqual(results1, [1, 2, 5, 7, 2, -1]);
assertArrayEqual(results1,data1);