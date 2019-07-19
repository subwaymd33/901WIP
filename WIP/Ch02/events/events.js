const events = require('events');

let eventEmitter = new events();

eventEmitter.on('work', () => {
    //dosomething
    console.log("*******");
    eventEmitter.emit('login');
    console.log("Write Tests");
    console.log("Code");
    console.log("Refactor");
    console.log("Go to Meeting");
    breakEvent();
})

eventEmitter.once('login',() => {
    console.log("Clocking in...");
})

eventEmitter.on('break', ()=>{
    console.log("Check Emails");
})

function breakEvent() {
    eventEmitter.emit('break');
}

eventEmitter.emit('work');
eventEmitter.emit('work');
