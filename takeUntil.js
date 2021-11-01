const takeUntil = function(array, callback) {
  let result = [];
  for (let val of array) {
    if (callback(val)) {
      break;
    }
    result.push(val);
  }
  return result;
};




module.exports = takeUntil;