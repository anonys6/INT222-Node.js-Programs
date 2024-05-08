const prompt = require('prompt-sync')();

var n1 = parseInt(prompt("Enter number 1 - "));
var n2 = parseInt(prompt("Enter number 2 - "));
var n3 = parseInt(prompt("Enter number 3 - "));
var n4 = parseInt(prompt("Enter number 4 - "));
var n5 = parseInt(prompt("Enter number 5 - "));

var largest = n1;

if(n2 > largest){
    largest = n2;
} if(n3 > largest){
    largest = n3;
} if(n4 > largest){
    largest = n4;
} if (n5 > largest){
    largest = n5;
}

console.log("The largest is " + largest);