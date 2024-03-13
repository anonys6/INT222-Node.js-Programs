const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("event", (n) => {
    console.log(n)
})

for (let i = 1; i <= 10; i++) {
    myEmitter.emit("event", i*i);
}
