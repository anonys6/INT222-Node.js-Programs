// JavaScript
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        socket.write('Message received');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(12345, () => {
    console.log('Server is listening on port 12345');
});