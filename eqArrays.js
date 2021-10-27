const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

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

//Test//

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[1,2,'3']),true);
assertEqual(eqArrays([1,2,3],[1,2,'3']),false);
assertEqual(eqArrays([1,2,3],[1,2]),true);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays(['1','2','3'],['1','2','3']),true);


