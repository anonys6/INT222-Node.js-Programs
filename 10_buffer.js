/*  
everything about javascript buffer

1. Buffer is a global object in node.js
2. Buffer is used to handle binary data
3. Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap
4. Buffer is used because V8 cannot handle binary data
5. Buffer is used to handle streams of binary data
6. Buffer is a global object and does not need to be imported
7. Buffer is a class in node.js
8. Buffer is used to handle binary data
9. Buffer is used to handle streams of binary data
10. Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap
11. Buffer is used because V8 cannot handle binary data
12. Buffer is used to handle binary data
13. Buffer is used to handle streams of binary data
14. Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap
15. Buffer is used because V8 cannot handle binary data
16. Buffer is used to handle binary data
17. Buffer is used to handle streams of binary data
18. Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap
19. Buffer is used because V8 cannot handle binary data
20. Buffer is used to handle binary data

*/

// // write code now
// const buffer = Buffer.from('Hello', 'utf-8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[2]);
// buffer.write('wo');
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[2]);
// console.log(buffer[3]);
// console.log(buffer.fill(69));
// console.log(buffer.toString());

// let buf1 = new Buffer.alloc(7);
// console.log(buf1.fill('a', 3, 6, 'utf-8'));



const b1 = Buffer.from('This is Node.js class');
const b2 = Buffer.from('34342423432eca334', 'hex');

console.log(b1);
console.log(b2);
console.log(b1.toString());
console.log(b2.toString());
