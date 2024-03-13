
const nickname = 'Surname';
const color = 'Lilac';


const intervalId = setInterval(() => {
    console.log(`Nickname: ${nickname}, Color: ${color}`);
}, 5000);


setTimeout(() => {
    clearInterval(intervalId);
}, 10100);



// const nickname = 'Surname';
// const color = 'Lilac';

// let counter = 2;

// function printDetails() {
//     if (counter < 2) {
//         console.log(`Nickname: ${nickname}, Color: ${color}`);
//         counter++;
//         setTimeout(printDetails, 5000);
//     }
// }

// printDetails();