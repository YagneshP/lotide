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

//---- takeUntil ------//


const takeUntil = function(array, callback) {
  // return slice of input array
  // until callback find the truthy value
  // loop through each element
  // stop where condition matched
  
  let result = [];
  for (let val of array) {
    if (callback(val)) {
      break;
    }
    result.push(val);
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//[ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArrayEqual(results1, [1,2,5,7,2]);
assertArrayEqual(results1, []);
assertArrayEqual(results1, [1, 2, 5, 7, 2, -1]);
assertArrayEqual(results1,data1);