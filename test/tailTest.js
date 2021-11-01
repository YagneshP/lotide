const assertEqual = require('../assertEqual');
const tail = require('../tail');

let array = [1,2,3];
let result = tail(array);
assertEqual(array.length - 1 , result.length);
assertEqual(2, result[0]);
assertEqual(3, result[1]);

//test for not modifing the original array
assertEqual(array.length, 3);