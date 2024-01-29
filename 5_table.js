const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (number) => {

    let i = 1;

    const printTable = () => {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
        if (i <= 10) {
            setTimeout(printTable, 1000);
        } else {
            console.log("Done");
            rl.close();
        }
    };

    printTable();
});
