const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.addListener("WaterFull", () => {
    console.log("Please turn of the motor");

    setTimeout(() => {
        console.log("Please turn of the motor, a gentle remainder");
    }, 3000);
});


console.log("My script is running");
console.log("My script is still running");

myEmitter.emit("WaterFull", () => {
    console.log("success");
})

console.log("My script after emitting on");