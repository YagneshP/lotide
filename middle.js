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

const middle = function(arr) {
  let length = arr.length;
  if(length === 0 || length === 1 || length === 2){
    return []
  } else if (length % 2 === 0){
    let index = length / 2;
    return [arr[index - 1], arr[index]]
  } else {
    let index = Math.floor(length / 2);
    return [arr[index]];
  }
}

//Test//
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2,3,4]), [2,3]);
assertArrayEqual(middle([]),[]);
assertArrayEqual(middle([1,2,3,4]),[2]); //false
assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2]),[1]); //false

