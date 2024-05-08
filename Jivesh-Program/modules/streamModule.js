const fs = require("fs");

// Create a Readable Stream from a file
const readableStream = fs.createReadStream("./SampleFolder/input.txt");

// Create a Writable Stream to a file
const writableStream = fs.createWriteStream("./SampleFolder/output.txt");

// Pipe the data from the Readable Stream to the Writable Stream
// readableStream.pipe(writableStream);

// Handle events on the Readable Stream
readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on("end", () => {
  console.log("Finished reading data.");
});

// Handle errors on the Readable Stream
readableStream.on("error", (error) => {
  console.error("An error occurred:", error);
});

// Write data to the stream
writableStream.write('Hello,');
writableStream.write('Bhai !');
writableStream.end(); // Mark the end of writing

// Handle events on the writable stream
writableStream.on('end', () => {
  console.log('Data has been written to the file.');
});

writableStream.on('error', (error) => {
  console.error('An error occurred while writing:', error);
});

