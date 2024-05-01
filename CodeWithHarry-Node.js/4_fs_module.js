const fs = require("fs");
// const path = require("path");

fs.readFile(__dirname + "\\1_hello.js", "utf8", (err, data) => {
    console.log(err, data);
})