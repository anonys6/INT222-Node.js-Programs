/*
even version - stable version (LTS)
odd version - beta version (not stable)

*/
const math = require("./2_math")
// const { add, sub } = require("./2_math")

console.log("Hello World");

console.log("Value of math is: ", math);
console.log("Value of math is (add): ", math.add(2, 4));
console.log("Value of math is (sub): ", math.sub(2, 4));