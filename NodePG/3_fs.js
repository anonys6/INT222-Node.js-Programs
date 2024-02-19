/*
async handles result
async doesn't returns anything
*/

const { log } = require('console');
const fs = require('fs');
const { clearScreenDown } = require('readline');

fs.writeFileSync('./NodePG/files/3_fs_sync.txt', 'Hello World from fs.writeFileSync');

fs.writeFile('./NodePG/files/3_fs_async.txt', 'Hello from async', (err) => {
    if (err) {
        console.log("handling error here: ", err);
    } else {
        console.log("found no error");
    }
})

const syncString = fs.readFileSync("./NodePG/files/3_fs_sync.txt", "utf-8");
console.log(syncString);

fs.readFile('./NodePG/files/3_fs_async.txt', 'utf-8', (err, str) => {
    if (err) {
        console.log("error found: ", err);
    } else {
        console.log("Print result");
        console.log(str);
    }
})

fs.appendFileSync('./NodePG/files/3_fs_sync.txt', `\n${Date.now()}: Hey There}\n`);

fs.cpSync('./NodePG/files/3_fs_sync.txt', './NodePG/files/3_cp_file.txt');
fs.unlinkSync('./NodePG/files/3_cp_file.txt');

