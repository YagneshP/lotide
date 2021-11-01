const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello']),'Hello');
assertEqual(head([1,2,3]), 4);