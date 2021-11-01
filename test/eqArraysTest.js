const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test//

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[1,2,'3']),true);
assertEqual(eqArrays([1,2,3],[1,2,'3']),false);
assertEqual(eqArrays([1,2,3],[1,2]),true);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays(['1','2','3'],['1','2','3']),true);