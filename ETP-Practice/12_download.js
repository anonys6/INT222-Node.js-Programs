// Yes, another way to achieve the same result is by using the res.download() function provided by Express.Here's how you can modify the previous example to use res.download():

const express = require('express');
const app = express();

// Define the endpoint to download a file
app.get('/download', (req, res) => {
    // Specify the path to the file you want to download
    const filePath = 'path/to/your/file.txt';

    // Send the file as an attachment using res.download()
    res.download(filePath, 'file.txt', (err) => {
        if (err) {
            // If an error occurs, send a 404 status code
            res.status(404).send('File not found');
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// With res.download(), you specify the file path, the name you want to give to the downloaded file, and optionally a callback function to handle any errors that occur during the download process.This function automatically sets the appropriate headers for file download.