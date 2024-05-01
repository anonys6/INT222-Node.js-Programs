const http = require('http');
const fs = require('fs');
const { clearScreenDown } = require('readline');

const myServer = http.createServer((req, res) => {
    let log = `${Date.now()}: New request received from IP: ${req.connection.remoteAddress || req.socket.remoteAddress} and path: ${req.url}\n`;
    fs.appendFile('NodePG/log.txt', log, (err) => {
        if (err) {
            console.log(err);
        }

        switch (req.url) {
            case "/": res.end("Homepage");
                break;
            case "/about": res.end("My name is Shakib");
                break;
            default: res.end("404: Page not found!");
        }
    });
});

//  one port can run one server
//  using req object we can find who is requesting and act accordingly

myServer.listen(8000, () => console.log("Server is running"));