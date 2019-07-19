const Band = require('./constructor-band.js');

const beatles = new Band('The Beatles', ['John','Paul','George','Ringo']);

console.log(beatles.memberCount());
console.log(beatles.hasMember('Michael'));
console.log(beatles.hasMember('Paul'));