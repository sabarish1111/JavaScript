const lodash = require('lodash');
const numbers = [3,1,4,1,5,9,2,6,5,3];
const sortedNumbers = lodash.sortBy(numbers);
console.log(sortedNumbers);