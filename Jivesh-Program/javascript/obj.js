var a = "Hello"
var b = 123
var result = a + b

// console.log(result);
// console.log(typeof result);


const person = {
    name: "John",
    age: 30
}

// person = 50 //Will result in error becuase we cannot reassign a constant variable
console.log(person);


person.age = 40 //But you can modify the properties
console.log(person.age);

//And add new ones
person.gender = "male"
console.log(person);


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Define the dictionary object with word-meaning pairs
var dictionary = {
    "apple": "a round fruit with red or green skin and a whitish interior",
    "computer": "an electronic device that can perform various tasks",
    "house": "a building for human habitation",
    "sun": "the star around which the earth orbits",
    "book": "a written or printed work consisting of pages glued or sewn together along one side"
};

// Function to look up the meaning of a word in the dictionary
function lookupWord(word) {
    if (word in dictionary) {
        return dictionary[word];
    } else {
        return "Word not found in dictionary";
    }
}

// Test the lookup function with some words
// console.log("Meaning of 'apple':", lookupWord("apple"));
// console.log("Meaning of 'computer':", lookupWord("computer"));
// console.log("Meaning of 'house':", lookupWord("house"));
// console.log("Meaning of 'sun':", lookupWord("sun"));
// console.log("Meaning of 'book':", lookupWord("book"));
// console.log("Meaning of 'banana':", lookupWord("banana")); // Word not found in dictionary
console.log(dictionary["computer"]);
