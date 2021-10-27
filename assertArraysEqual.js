
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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : `,actual, `===` ,expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : `,actual, `!==` ,expected);
  }
};

assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([1,2,3],[1,2,'3']);
assertArrayEqual([],[]);
assertArrayEqual([1,2,3],[1,2]);