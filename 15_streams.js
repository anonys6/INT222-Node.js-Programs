const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write("Hello, ");
writeStream.write("world!");
writeStream.end();

writeStream.on('finish', () => {
    console.log("Data has been written to the file.");
});

writeStream.on('error', (err) => {
    console.error("Error writing to file: ", err);
});