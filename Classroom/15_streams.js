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

const readStream = fs.createReadStream('output.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('error', (err) => {
    console.error("Error reading file: ", err);
});

readStream.on('end', () => {
    console.log("Finished reading the file.");
});