const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("event1", () => {
    console.log("Calling event 1");
});

myEmitter.on("noArg", () => {
    console.log("Event with no argument");
});

myEmitter.on("withArg", (name) => {
    console.log("Event with argument");
    console.log(`Name: ${name}`);
});

myEmitter.once("eventOnce", () => {
    console.log("Once event: this will print only  once");
});

myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});


myEmitter.emit("event1");
myEmitter.emit("noArg");
myEmitter.emit("withArg", "Shakib");
myEmitter.emit("eventOnce");

myEmitter.emit('error', new Error('Whoops!'));

console.log(myEmitter.getMaxListeners());