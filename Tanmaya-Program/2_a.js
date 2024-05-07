const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const input = fs.createReadStream('test.txt');
const output = fs.createWriteStream('input.txt.gz');

// Pipe the read and write operations
// read input.txt -> compress it -> write to input.txt.gz
input.pipe(gzip).pipe(output);