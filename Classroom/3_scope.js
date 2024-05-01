// let x;
// const y = 9;
// var z = 70;

// a(20);

// x = 9;
// // let x = 9; // error

// // var z = 8; // ok

// {
//     let x = 5;
//     console.log("Inside block x: ", x);
// }

// {
//     const y = 10;
//     console.log("Inside block y: ", y);
//     var z = 80;
// }

// // var z = 90;
// console.log("Outside block z: ", z);
// console.log("Outside block y", y);

// function a(b) {
//     console.log("From function a(), value of b: ", b);
// }


// let x;

// console.log(x);

// x = 9;


// x = 10;
// y = 7;

// console.log(typeof(x));
// console.log(typeof(y));

// if (x == y) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log(10 + 20 + "11" + 7 + 8);\

// x = "10";

// console.log(typeof(x));

// x = x - 5;
// // x++ + ++x;

// console.log(typeof(x));


// console.log(x);

var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--) {
    console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
}