const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            console.error(err);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(content);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname, "index.html");

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             res.statusCode = 500;
//             res.setHeader("Content-Type", "text/plain");
//             res.end("An error has occurred");
//         } else {
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/html");
//             res.end(content);
//         }
//     })
// })

// server.listen(port);