const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};
let array = [1,2,3];
const tail = function(arr) {
  return arr.slice(1);
};

let result = tail(array);
assertEqual(array.length - 1 , result.length);
assertEqual(2, result[0]);
assertEqual(3, result[1]);

//test for not modifing the original array
assertEqual(array.length, 3);