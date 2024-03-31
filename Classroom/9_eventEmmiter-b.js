var event = require('events');

var myEmitter = new event.EventEmitter();

myEmitter.on('anEvent', function (msg) {
    console.log(msg);
});

myEmitter.emit('anEvent', 'I am emitted');
myEmitter.emit('anEvent', 'I am emitted');
myEmitter.removeAllListeners('anEvent');
myEmitter.emit('anEvent', 'I am emitted');
myEmitter.emit('anEvent', 'I am emitted');