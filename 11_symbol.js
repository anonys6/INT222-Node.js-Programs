const k1 = Symbol('key');
const k2 = Symbol('key');

const myobj = {};

myobj[k1] = 'Node JS';
myobj[k2] = 'Angular JS';

for (let key in myobj) {
    console.log(key, myobj[k1]);
}

