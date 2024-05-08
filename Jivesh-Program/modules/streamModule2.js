const fs = require("fs");

// Create a Readable Stream from a file
const readableStream = fs.createReadStream("./SampleFolder/input.txt");

// Create a Writable Stream to a file
const writableStream = fs.createWriteStream("./SampleFolder/output.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on("end", () => {
  console.log("Finished reading data.");
});

// Write data to the stream
writableStream.write('Hello,');
writableStream.write('How are you?');
// writableStream.end(); // Mark the end of writing

// Handle events on the writable stream
writableStream.on("end", () => {
  console.log('Data has been written to the file.');
});



