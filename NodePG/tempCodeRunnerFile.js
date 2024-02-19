
fs.readFile('./NodePG/files/3_fs_async.txt', 'utf-8', (err, str) => {
    if (err) {
        console.log("error found: ", err);
    } else {
        console.log("Print result");
        console.log(str);
    }