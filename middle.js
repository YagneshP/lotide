

const middle = function(arr) {
  let length = arr.length;
  if(length === 0 || length === 1 || length === 2){
    return []
  } else if (length % 2 === 0){
    let index = length / 2;
    return [arr[index - 1], arr[index]]
  } else {
    let index = Math.floor(length / 2);
    return [arr[index]];
  }
}

module.exports = middle;

