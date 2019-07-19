const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));

console.log("Going to read a file");

Promise.try(()=>{
    return fs.readFileAsync("./input.txt",'utf-8').then(function(contents) {
        console.log(contents);
    }).catch((err)=>{
        console.error("Im in a catch block")
        console.error(err);
    })
})