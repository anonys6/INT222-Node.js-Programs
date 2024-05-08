const prompt = require("prompt-sync")();

const num = prompt("Enter a number: ");
let i = 1;

function table(num) {
    let interval = setInterval(() => {
        if (i < 11) {
            console.log(num * i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000)
}

table(num);