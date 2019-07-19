var moment = require('moment');
var moment_tz = require('moment-timezone');

console.log(moment().format('MM-DD-YYYY'));
console.log(moment("20110101","YYYYMMDD").fromNow());

var newYork    = moment_tz.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");

console.log(newYork.format());
console.log(losAngeles.format());

