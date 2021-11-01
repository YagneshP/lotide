const without = function(arr1 , arr2) {
  return arr1.filter(el => !arr2.includes(el));
};

module.exports = without;