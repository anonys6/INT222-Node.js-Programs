const fs = require('fs');

// Create a read stream from a source file
const readStream = fs.createReadStream('./SampleFolder/source.txt');

// Create a write stream to a destination file
const writeStream = fs.createWriteStream('./SampleFolder/destination.txt');

// Pipe the read and write operations
// readStream -> writeStream
readStream.pipe(writeStream);