const EventEmitter = require('events');
const event = new EventEmitter();

event.on('test', ()=>{
    console.log("Custom event created.")
})

event.on('test', ()=>{
    console.log("Calling multiple times.")
})

event.emit('test');