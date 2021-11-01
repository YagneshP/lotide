const assertArrayEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const result2 = map(words, word => word);


assertArrayEqual(results1, ['g','c','t','m','t']);
assertArrayEqual(results1, []);
assertArrayEqual(results1, ['g','c','T','m','t']);
assertArrayEqual(results1, words);
assertArrayEqual(result2, words);