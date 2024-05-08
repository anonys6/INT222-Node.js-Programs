var fs = require("fs");

fs.readFile('Input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data);
});

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    console.log("File is open at localhost:5000");
    fs.readFile('Input.txt', function (err, data) {
        res.write(data);
        return res.end();
    });
}).listen(5000);

var fs = require('fs');
fs.appendFile('Input.txt', '\nAdding New  Content Using appendFile Method!',
    function (err) {
        if (err) throw err;
        console.log('The content is Appended!!!!');
    });

var fs = require('fs');
fs.open('Input2.txt', 'w', function (err, file) {
    fs.writeFile('Input2.txt', '\n I am added while open', function (err) {
        console.log('Content added and Saved!!');
    });
    if (err) throw err;
    console.log('Saved!');
});

var fs = require('fs');
fs.writeFile('Input3.txt', 'I am a New file',
    function (err) {
        if (err) throw err;
        console.log('Content added and Saved!!');
    });

var fs = require('fs');
fs.rm('Input2.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted!');
});

var fs = require('fs');
fs.copyFile('Inputnew.txt', 'Input2.txt', function (err) {
    if (err) throw err;
    console.log('File Copied!');
});

var fs = require('fs');
fs.chmod('Input1.txt', 0o775,
    function (err) {
        if (err) throw err;
        console.log('File Mode Changed');
    });


const data = {
    name: "John Doe",
    age: 32,
    title: "Vice President of JavaScript"
}
const jsonStr = JSON.stringify(data);
console.log(jsonStr);