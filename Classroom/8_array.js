const courses = ['JavaScript', "NodeJS", "ReactJS", , , , , ,];

console.log(courses);
console.log(courses[3]);

// destructuring an array
let [x, ...y] = courses;

console.log(x + " " + y);


const num = [1, 2, 3, 4, 5];
console.log(num);
num.push(6);
console.log("After pushing 6 in num: " + num);
console.log("Lenght of num: " + num.length);

const num1 = [7, 8, 9];
const num2 = [10, 11, 12];
const num3 = [13, 14, 15];

console.log(num1.concat(num2, num3));
// num1 = num1.concat(num2, num3); // use let to do this
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num2 + "," + num3);

const num4 = num1.concat(num2, num3);
console.log(num4);
const even = num4.every(function (e) {
    return e % 2 === 0;
});
console.log(even);

const odd = num4.filter(function (e) {
    return e % 2 !== 0;
});
console.log(odd);

num3.forEach(function (num, i) {
    num3[i] = num3[i] ** 2;
    console.log(num);
});
console.log(num3);

const num5 = [10, 4, 6, 8, 2];
console.log(num5.sort(function (a, b) {
    return a - b;
}));