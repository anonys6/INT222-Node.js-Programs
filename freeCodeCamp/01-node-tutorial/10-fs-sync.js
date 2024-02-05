const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')

// fs.readFileSync // synchronous
// fs.readFile // asynchronous

console.log('start')
const first = readFileSync('./freeCodeCamp\\01-node-tutorial\\content\\first.txt', 'utf8')
const second = readFileSync('./freeCodeCamp\\01-node-tutorial\\content\\second.txt', 'utf8')

writeFileSync(
  './freeCodeCamp\\01-node-tutorial\\content\\result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
