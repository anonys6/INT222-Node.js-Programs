for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}
