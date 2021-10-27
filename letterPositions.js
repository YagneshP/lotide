
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



const letterPositions = function(str) {
  const result = {};
  //iterate each word of the sentence
  //skip space
  for (let word of str) {
    if (word !== " ") {
      if (!result[word]) {
        result[word] = [];
        result[word].push(str.indexOf(word));
      } else {
        result[word].push(str.indexOf(word, result[word][result[word].length - 1] + 1));
      }
    }
  }
  return result;
};

//TEST//
let result1 = letterPositions('hello');
assertArrayEqual(result1['h'],[0]);
assertArrayEqual(result1['e'],[1]);
assertArrayEqual(result1['l'],[2,3]);
assertArrayEqual(result1['o'],[4]);
assertArrayEqual(result1['l'],[2]);