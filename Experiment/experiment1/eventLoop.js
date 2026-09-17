console.log(`1. Program started`);

process.nextTick( () => {
    console.log(`2. process.nextTick()`) // execcute just after current operation
});

setTimeout(()=>{
    console.log(`3. setTimeout()`); // execute after specified times
}, 0);

setImmediate(() => {
    console.log(`4. setImmediate()`); // execute in check phase of event loop
});

console.log(`5. Program Ended`);