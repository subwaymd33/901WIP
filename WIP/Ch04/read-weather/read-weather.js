const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');

Promise.try(()=>{
    return fs.readFileAsync('./weather.json').then(function(contents){
        let weatherArray;
        Promise.try(()=>{
            weatherArray = JSON.parse(contents);
        }).catch((err)=>{
            console.error(err);
        })
        console.log(weatherArray);
        console.log('**************************');
        console.log(_.minBy(weatherArray,function(o){return o.low}));
        console.log(_.maxBy(weatherArray,function(o){return o.high}));
        weatherArray = _.sortBy(weatherArray,function(o){return o.low});
        console.log(weatherArray);
        
    })
   
    });


