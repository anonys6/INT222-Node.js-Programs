/*

CRUD - Create Read Update Delete

fs.writeFileSync(path, content) return undefined
fs.writeFile(path, content, callback) return undefined

fs.readFileSync(path, encoding) return buffer
fs.readFile(path, encoding, callback) return undefined

fs.appendFileSync(path, content) return undefined
fs.appendFile(path, content, callback) return undefined

fs.renameSync(path, new name) return undefined
fs.rename(path, new name, callback) return undefined

fs.unlinkSync(path) return undefined
fs.unlink(path) return undefined

*/

const fs = require('fs');
const path = require('path');

// __dirname: current working directory
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(path, content)
fs.writeFileSync(filePath, 'Simple text file');

// fs.readFile(path, encoding, callback)
fs.readFile(filePath, 'utf8', (err, data) => {
    // console.log(data.toString()); // either this to convert the buffer
    console.log(data);
})

// fs.appendFile(path, update value, callback)
fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
    if (!err) console.log("updated successfully");
});

// fs.rename(path, new name, callback)
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if (!err) console.log("name changed");
})

// fs.unlinkSync(path)
fs.unlinkSync(`${dirPath}/fruit.txt`)