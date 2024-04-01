const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is my response</h1><p>With a paragraph</p>");
});

server.listen(port, () => {
    console.log(`Open this to check ${port}`);
})