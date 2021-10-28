const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};
const results1 = map(words, word => word[0]);
const result2 = map(words, word => word);
// console.log(results1);

assertArrayEqual(results1, ['g','c','t','m','t']);
assertArrayEqual(results1, []);
assertArrayEqual(results1, ['g','c','T','m','t']);
assertArrayEqual(results1, words);
assertArrayEqual(result2, words);

