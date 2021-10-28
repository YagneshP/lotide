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

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};


const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectEqual({a :1, b : 2},{b: 2, a: 1});
assertObjectEqual({a :3, b : 2},{b: 2, a: 1});
assertObjectEqual({a :[1,'2'], b : 2},{b: 2, a: [1, '2']});
assertObjectEqual({a :[1,'2',3], b : 2},{b: 2, a: [1, '2']});



