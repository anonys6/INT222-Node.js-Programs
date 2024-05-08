const fs = require('fs');
const zlib = require('zlib');

// Create a readable stream from the input file
const readStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream to write compressed data to a file
const writeStream = fs.createWriteStream('compressed_output.txt.gz');

// Create a gzip compression stream
const gzip = zlib.createGzip();

// Pipe the readable stream to the gzip compression stream and then pipe it to the writable stream
readStream.pipe(gzip).pipe(writeStream);

// Listen for 'finish' event to know when compression is complete
writeStream.on('finish', () => {
    console.log('Compression complete');

    // Now, decompress the compressed data and print it to the console
    const compressedReadStream = fs.createReadStream('compressed_output.txt.gz');
    const decompress = zlib.createGunzip();

    compressedReadStream.pipe(decompress).pipe(process.stdout);
});