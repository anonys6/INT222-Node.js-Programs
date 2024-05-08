// JavaScript
const net = require('net');

const client = net.createConnection({ port: 12345 }, () => {
    console.log('Connected to server');
    client.write('how are you, Server!');
});

client.on('data', (data) => {
    console.log(`Received: ${data}`);
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from server');
});