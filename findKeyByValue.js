const findKeyByValue = function(obj,str) {
  for(let key in obj){
    if(obj[key] === str){
      return key
    }
  }
}

module.exports = findKeyByValue;


