// Define a class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Define a method
    speak() {
        console.log(`${this.name} is speaking.`);
    }
}

// Create an object of the class
const dog = new Animal("Dog", 5);

// Call the method
dog.speak();
