const letterPositions = function(str) {
  const result = {};
  for (let word of str) {
    if (word !== " ") {
      if (!result[word]) {
        result[word] = [];
        result[word].push(str.indexOf(word));
      } else {
        result[word].push(str.indexOf(word, result[word][result[word].length - 1] + 1));
      }
    }
  }
  return result;
};

module.exports = letterPositions;