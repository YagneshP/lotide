const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};
//sentence as arg
//iterate over each word all letters
//not include space

const countLetters = function(str) {
  let result = {};
  for (let word of str) {
    if (word !== " ") {
      if (result[word]) {
        result[word] += 1;
      } else {
        result[word] = 1;
      }
    }
  }
  return result;
};

//Test//

let result1 = countLetters('hello');

assertEqual(result1['h'],1);
assertEqual(result1['l'],2);
assertEqual(result1['k'], undefined);
assertEqual(result1['o'],2);