const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (number) => {

    for (let i = 1; i < 11; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    
    rl.close();
});
