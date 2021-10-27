const without = function(arr1 , arr2) {
  return arr1.filter(el => !arr2.includes(el));
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    if (arr1.length === 0) {
      return true;
    } else {
      let result = [];
      for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] === arr2[i]);
      }
      return !result.includes(false);
    }
  } else {
    return false;
  }
};


const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : `,actual, `===` ,expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : `,actual, `!==` ,expected);
  }
};
const words = ['hello', 'world', 'lighthouse'];
const result = without(['1','2','3'],[1,2, '3']);
const result2 = without(words,['lighthouse']);

assertArrayEqual(result, ['1','2']);
assertArrayEqual(words, ['hello', 'world', 'lighthouse']);
assertArrayEqual(result2, ['hello', 'world']);
assertArrayEqual(result2,['lighthouse']);