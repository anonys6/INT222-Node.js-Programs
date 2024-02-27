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



// const b1 = Buffer.from('This is Node.js class');
// const b2 = Buffer.from('34342423432eca334', 'hex');

// console.log(b1);
// console.log(b2);
// console.log(b1.toString());
// console.log(b2.toString());

// const buf3=Buffer.from('Abcdefgah');
// console.log(buf3.includes(61));

// const buf = Buffer.alloc(5);
// console.log(buf.fill("hello", 2, 4));

// const buf1 = Buffer.from('This is Node.js class');
// const buf2 = Buffer.from('54686973206973204e6f64652e6a7320636c617373', 'hex');
// console.log(buf1.toString('hex', 5, 15));
// console.log(buf2.toString('utf8', 5, 10));

// buf=new Buffer.alloc(50);
// n=buf.write('This is Nodejs class ');
// console.log('The number of octets are:'+n);

// var buf1 = Buffer.from('wow');
// var buf2= Buffer.from('hello');
// var buf3 = Buffer.concat([buf1,buf2],5);
// console.log("The contents are " + buf3.toString());

// var buffer1 = Buffer.from('ABCD');
// var buffer2 = Buffer.from('ABcD');
// var result = buffer1.compare(buffer2);
// if(result === 0)
// {
// console.log(buffer1+"is equal to "+ buffer2);
// }
// else
// {
// console.log(buffer1+"is not equal to"+ buffer2);
// }

// var buffer1 = Buffer.from('This is Nodejs');
// var buffer2 = Buffer.alloc(10);
// buffer1.copy(buffer2,4,4,10);
// console.log("buffer2 content: " + buffer2.toString());



// Create an empty buffer of size 10. // A buffer that only can accommodate 10 bytes.
const buf1 = Buffer.alloc(10);
// Create a buffer with content
const buf2 = Buffer.from("hello buffer");
// Once your buffer has been created, you can start interacting with it

// Examine the structure of a buffer
console.log(buf1.toJSON());// { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }// an empty buffer
console.log(buf2.toJSON());// { type: 'Buffer',     data: [        104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114      ]    }
// the toJSON() method presents the data as the Unicode Code Points of the characters
// Examine the size of a buffer
console.log(buf1.length); // 10
console.log(buf2.length) // 12. Auto-assigned based on the initial content when created.
// Write to a bufferbuf1.write("Buffer really rocks!")
buf1.write("Buffer really rocks!");
// Decode a buffer
console.log(buf1.toString()) // 'Buffer rea'
//oops, because buf1 is created to contain only 10 bytes, it couldn't accommodate the rest of the characters
// Compare two buffers

// fft is a computational tool that helps digital computer to analyze tool
// it is an algorithm that computes discrete of a sequence or of its inverse dft (idft)
// formula = x[k] = 1/N * sum(x[n] * e^(-2 * pi * i * k * n / N))
// the fft algorithms converts a digital signal form the time domain into a signal in the frequency domain
// the fft is an important method in the sign of audio and acoustic measurements
