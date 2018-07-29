// Jan 1st 1970 00:00:00 am
const moment = require('moment');

var date1 = moment();
var date2 = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
console.log(
  date1
    .add(24, 'minutes')
    .subtract(11, 'hours')
    .format('h:mm a ')
);

// 6:01 am
console.log(
  date2
    .subtract(10, 'minutes')
    .subtract(15, 'hours')
    .format('h:mm a ')
);
var createdAt = 1234;
var date = moment();
console.log(date.format('h:mm a '));