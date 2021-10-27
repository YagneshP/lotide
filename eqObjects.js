const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

//Returns true if both objects have identical keys with identical values
//Otherwise false

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      return obj1[key] === obj2[key] ? true : false
    }
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
