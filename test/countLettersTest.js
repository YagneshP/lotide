const assertEqual = require('../assertEqual');
const countLetters =  require('../countLetters');

let result1 = countLetters('hello');

assertEqual(result1['h'],1);
assertEqual(result1['l'],2);
assertEqual(result1['k'], undefined);
assertEqual(result1['o'],2);