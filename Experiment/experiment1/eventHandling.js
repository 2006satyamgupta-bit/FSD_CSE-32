const EventHandler = require('events')
const { EventEmitter } = require('stream')


const emitter = new EventEmitter();

emitter.on("load", (name)=>{
    console.log(`Welcome, ${name}`)
})

emitter.on("exit", ()=>{
    console.log(`Program is exiting...`);
});

emitter.emit("load", "Satyam");
emitter.emit("exit")