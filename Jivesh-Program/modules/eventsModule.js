// const events = require('events');
// const myEmitter2 = new events.EventEmitter();

// This line imports the EventEmitter class from the built-in events module in Node.js. The events module provides a way to create and handle custom events.
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//This line creates a new instance of the EventEmitter class and assigns it to the variable myEmitter.

//Listener functions
const sayHello = () => {
    console.log('Hello User.');
}

const sayHi = () => {
    console.log('Hi User.');
}

//Subscribing to 'userJoined' event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);

//Emitting the event
myEmitter.emit('userJoined');

// const greetBday = (name, age) => {
//     console.log(`\nHappy Bday ${name}. You are now ${age}!`);
// }

myEmitter.on('bday', (name, age) => {
    console.log(`\nHappy Bday ${name}. You are now ${age}!`);
});

myEmitter.emit('bday', 'John', '24');

