const assertEqual = require('../assertEqual');
// Add the require logic to the top of our test file have to go back one; we are 
// in the test dir, and the file we are testing ins in the ltide dir
// note: this was the "testing code" we removed from the assertEqual file.



assertEqual('"Lighthouse Labs"', '"Bootcamp"');
assertEqual(1, 1);
assertEqual('"Lighthouse Labs"', '"Lighthouse Labs"');
assertEqual(1, '"1"');
assertEqual(1, 2);