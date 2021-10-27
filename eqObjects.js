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

//Returns true if both objects have identical keys with identical values
//Otherwise false

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


//Test
const ab = {a : 'ab', b : 'b'};
const a = {a : 'a', b : 'b'};
const ba = {b : 'b', a : 'a'};
const abc = {a : 'a', b : 'b', c : 'c'};

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(a,ba), true);
assertEqual(eqObjects(ab,ba), false);
assertEqual(eqObjects(abc, ab), false);
assertEqual(eqObjects(ab,ba), undefined);

console.log("=======================");

const cd = {c : '1', d : ['2', 3]};
const dc = {d : ['2', 3], c : '1'};

const cd2 = {c : '1', d : ['2',3,4]};
const cd3 = {d : ['2',3,4], c : '1'};

assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2),false);
assertEqual(eqObjects(cd3,cd2),true);