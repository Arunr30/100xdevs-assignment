// Test Variables
const number = 100;
let isEven = number % 2 === 0;

// Function to Check Even or Odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Test Array and Loop
const fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Object Example
const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};

// Display Results
console.log(`The number ${number} is ${checkEvenOdd(number)}.`);
console.log(person.greet());

// Try-Catch Block Example
try {
    const result = number / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed!");
    }
} catch (error) {
    console.error("Error:", error.message);
}

// Class Example
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        return `${this.name} says ${this.sound}`;
    }
}

const dog = new Animal("Dog", "Woof");
console.log(dog.makeSound());


