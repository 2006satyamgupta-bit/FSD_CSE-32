const EventEmitter = require("events");
class MyEmitter extends EventEmitter {} // create custom EventEmitter

const myEmitter = new MyEmitter();


// 
myEmitter.on("greet", (name)=>{
    console.log(`Hi, ${name}`)
});

// exit event

myEmitter.on("exit", () => {
    console.log(`Programming is exiting...`);  // listen event
});

//Trigger greet event
myEmitter.emit("greet", "Satyam")

// Trigger exit event
myEmitter.emit("exit")