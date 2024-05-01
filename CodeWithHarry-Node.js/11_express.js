const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const data = fs.readFileSync("index.html");
    res.send(data.toString());
});

app.get("/about", (req, res) => {
    res.send("<h1>About of the page</h1><p>You are in about</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact of the page</h1><p>You are in contact</p>");
})

app.listen(port, () => {
    console.log(`Server available at port- localhost:${port}`);
})