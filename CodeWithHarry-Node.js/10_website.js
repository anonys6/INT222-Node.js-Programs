const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);

    if (req.url == "/") {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end("<h1>About of the page</h1><p>You are in about</p>");
    } else if (req.url == "/contact") {
        res.statusCode = 200;
        res.end("<h1>Contact of the page</h1><p>You are in contact</p>");
    } else {
        res.statusCode = 404;
        res.end("<h1>Error: 404<h1><p>Page not found</p>");
    }
})

server.listen(port, () => {
    console.log(`Server available at port- localhost:${port}`);
})