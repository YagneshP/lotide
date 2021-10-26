const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length === arr2.length){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
      console.log(i);
      console.log(arr1.length);
      result.push(arr1[i] === arr2[i]);
    }
    if(result.includes(false)){
      return false;
    } else {
      return true;
    }
  } else {
    return false
  }
}

// Test 
// assertEqual(eqArrays([1,2,3],[1,2,3]),true);
// assertEqual(eqArrays([1,2,3],[1,2,'3']),true);
// assertEqual(eqArrays([1,2,3],[1,2,'3']),false);
// assertEqual(eqArrays([1,2,3],[1,2]),true);
assertEqual(eqArrays([],[]),true);



