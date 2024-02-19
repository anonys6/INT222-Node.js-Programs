/*
async handles result
async doesn't returns anything
*/

const fs = require('fs');

fs.writeFileSync('./NodePG/files/3_fs_sync.txt', 'Hello World from fs.writeFileSync');

fs.writeFile('./NodePG/files/3_fs_async.txt', 'Hello from async', (err) => {
    if (err) {
        console.log("handling error here: ", err);
    } else {
        console.log("found no error");
    }
})