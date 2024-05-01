const fs = require('fs');
const os = require('os');


// blocking - program is going to wait for result to complete first
// default thread-pool size if 4
// max thread possible = os.cpus().length
// console.log(1);
// const result = fs.readFileSync('./NodePG/files/3_fs_sync.txt', 'utf-8');
// console.log(result);
// console.log(2);


// non-blocking - program is going to execute without waiting
// console.log(1);
// fs.readFile('./NodePG/files/3_fs_sync.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })
// console.log(2);

console.log(os.cpus().length);