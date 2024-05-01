const myData = {
    name: "My_name",
    age: 13,
    like: ["cs", "java", 2]
};

console.log(myData, " type is: ", typeof(myData));

const asStr = JSON.stringify(myData);
console.log(asStr, " type is: ", typeof(asStr));

const afterParse = JSON.parse(asStr);
console.log(afterParse, " type is: ", typeof(afterParse));