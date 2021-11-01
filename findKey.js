
const findKey = function(obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key
    }
  }
  return undefined; // explicitly returning undefined
};



module.exports = findKey;