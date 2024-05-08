// Arithmetic operators
var num1 = 10;
var num2 = 5;
var sum = num1 + num2; // Addition
var difference = num1 - num2; // Subtraction
var product = num1 * num2; // Multiplication
var quotient = num1 / num2; // Division
var remainder = num1 % num2; // Modulus

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Assignment operators
var x = 10;
x += 5; // Equivalent to: x = x + 5;
console.log("x after addition:", x);

var y = 20;
y -= 5; // Equivalent to: y = y - 5;
console.log("y after subtraction:", y);

var z = 5;
z *= 2; // Equivalent to: z = z * 2;
console.log("z after multiplication:", z);

// Comparison operators
var a = 10;
var b = 20;

console.log("a < b:", a < b);
console.log("a > b:", a > b);
console.log("a <= b:", a <= b);
console.log("a >= b:", a >= b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);

// Logical operators
var p = true;
var q = false;

console.log("p AND q:", p && q);
console.log("p OR q:", p || q);
console.log("NOT p:", !p);
console.log("NOT q:", !q);

// Bitwise operators
var m = 5; // Binary: 0101
var n = 3; // Binary: 0011

console.log("Bitwise AND:", m & n); // Result: 0101 & 0011 = 0001 (1 in decimal)
console.log("Bitwise OR:", m | n); // Result: 0101 | 0011 = 0111 (7 in decimal)
console.log("Bitwise XOR:", m ^ n); // Result: 0101 ^ 0011 = 0110 (6 in decimal)
console.log("Bitwise NOT for m:", ~m); // Result: ~0101 = 1010 (-(m+1) = -6 in decimal)
console.log("Bitwise NOT for n:", ~n); // Result: ~0011 = 1100 (-(n+1) = -4 in decimal)
console.log("Bitwise left shift:", m << 1); // Result: 0101 << 1 = 1010 (10 in decimal)
console.log("Bitwise right shift:", m >> 1); // Result: 0101 >> 1 = 0010 (2 in decimal)

// Unary operators
var i = 10;
console.log("Unary plus:", +i); // Result: 10
console.log("Unary minus:", -i); // Result: -10
console.log("Increment:", ++i); // Result: 11
console.log("Decrement:", --i); // Result: 10

// Ternary operator
var age = 20;
var message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log("Message based on age:", message);
