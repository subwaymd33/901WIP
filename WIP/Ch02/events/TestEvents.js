const events = require('events');

let eventEmitter = new events();

eventEmitter.on('sighting',()=>{
    console.log(`I found the number 11`);
})
eventEmitter.on('non-sighting',()=>{
    console.log('**********');
})
eventEmitter.on('non-sighting2',()=>{
    console.log('----------');
})
let tLoopCount =0;
eventEmitter.on('test', (min, max)=>{
    let interval = setInterval(()=>{
        let randNum = Math.floor((Math.random()*(max-min)+min));
        tLoopCount+=1;
        if (randNum==11){
            eventEmitter.emit('sighting');
            console.log(`It took ${tLoopCount} loops to find the test value.`);
            clearInterval(interval);
        }else{
            eventEmitter.emit('non-sighting');
            
        };
    }, 300)
})

let t2LoopCount =0;
eventEmitter.on('test2', LoopingTest);


function LoopingTest(min, max){
    let interval = setInterval(()=>{
        let randNum = Math.floor((Math.random()*(max-min)+min));
        t2LoopCount+=1;
        if (randNum==11){
            eventEmitter.emit('sighting');
            console.log(`It took ${t2LoopCount} loops to find the test2 value.`);
            clearInterval(interval);
        }else{
            eventEmitter.emit('non-sighting2');
            
        }
    }, 100)
}

//eventEmitter.emit('test',0,20);
eventEmitter.emit('test2', 0, 20);
