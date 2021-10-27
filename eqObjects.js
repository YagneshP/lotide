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
    return true;
  }
  return false;
};


//Test
const ab = {a : 'a', b : 'b'};
const ba = {b : 'b', a : 'a'};
const abc = {a : 'a', b : 'b', c : 'c'};

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(abc, ab), false);
assertEqual(eqObjects(ab,ba), undefined);
