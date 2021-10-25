//assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

//head function
const head = function(arr){
  return arr[0];
}

// console.log(head([]));
// console.log(head([1]));
// console.log(head([1,2,3]));

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Hello']));