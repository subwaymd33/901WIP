let fs = require('fs');

fs.readFile('./input.txt','utf-8', function(err,data){
    if (err){
        console.error(err);
    }
    if (data){
        console.log(data);
    }
})