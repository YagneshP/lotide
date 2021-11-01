const assertEqual = require('../assertEqual');

assertEqual('hello','hello');
assertEqual('hello','Hello');
assertEqual(3,'3');
assertEqual(3,3);
assertEqual(3,4);