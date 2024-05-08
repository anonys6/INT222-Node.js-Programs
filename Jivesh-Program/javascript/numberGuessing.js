const prompt = require('prompt-sync')();

// Define the correct number
const correctNumber = 42;

// Prompt the user to enter a number
let userInput = parseInt(prompt("Guess the number: "));

// Keep prompting until the correct number is entered
while (userInput !== correctNumber) {
    console.log("Try again!");
    userInput = parseInt(prompt("Guess the number: "));
}

// Print a message when the correct number is entered
console.log("Congratulations! You guessed the correct number:", correctNumber);
