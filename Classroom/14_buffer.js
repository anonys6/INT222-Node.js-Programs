const b1 = Buffer.alloc(10);
const b2 = Buffer.from("This is my buffer 2");

console.log(b1);
console.log(b2);

console.log(b1.toString());
console.log(b2.toString());

console.log(b1.toJSON());
console.log(b2.toJSON());
