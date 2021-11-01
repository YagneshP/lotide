
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



module.exports = countLetters;