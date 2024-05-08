const zlib = require('zlib');

const input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
console.log('Original:', input);

// Compress data
zlib.deflate(input, (err, compressedData) => {
  if (err) {
    console.error('Compression error:', err);
    return;
  }
  console.log('Compressed:', compressedData);

  // Decompress data
  zlib.inflate(compressedData, (err, decompressedData) => {
    if (err) {
      console.error('Decompression error:', err);
      return;
    }
    console.log('Decompressed:', decompressedData.toString());
  });
});
