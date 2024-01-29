// x = 3784744444444444384737493434510; // normal number, print as 3.784744444444444e+30
x = 3784744444444444384737493434510n; // big number, print as 3784744444444444384737493434510n

y = 10;

// console.log(x + y);

// console.log(x);
// console.log(typeof (x));



// let person = { fname: "John", lname: "Doe", age: 25 };

// for (let x in person) {
//     console.log(x);
// }



// let cars = ['BMW', 'Volvo', 'Mini'];
// for (let x of cars) {
//     console.log(x);
// }


console.log("\nLOOP\n");

// var x = 3;
// while (x < 5) {
//     // break;
//     console.log(x);
//     x++;
// }

// var y;

// do {
//     console.log(y);
//     y++;
// } while (y < 5);


x = 1;

// while (x < 5) {
//     setTimeout(() => {
//         console.log(x);
//     }, 1000);
// }

// let counter = 0;
// const interval = setInterval(() => {
//     console.log("Hello");
//     counter++;
//     if (counter === 5) {
//         clearInterval(interval);
//     }
// }, 1000);


// setImmediate(function() {
//     console.log("Immediate");
// }, 5000);


// function countDown(fromNumber) {
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         setTimeout(() => {
//             countDown(nextNumber);
//         }, 1000);
//     }
// }


// Using setInterval

// function countDownIn(fromNumber) {
//     console.log(fromNumber);
//     let intervalId = setInterval(function () {
//         fromNumber--;

//         if (fromNumber > 0) {
//             console.log(fromNumber);
//         } else {
//             console.log("End");
//             clearInterval(intervalId);
//         }
//     }, 1000)
// }

// countDownIn(5);

function welcome() {
    console.log("Welcom to timer code set timeout");
}

function welcome1() {
    console.log("I am set interval ");
}

function welcome2() {
    console.log("I am set immediate");
}

var id1 = setTimeout(welcome, 5000);
var id2 = setInterval(welcome1, 2000);
var id3 = setImmediate(welcome2);

clearTimeout(id1);
clearInterval(id2);


