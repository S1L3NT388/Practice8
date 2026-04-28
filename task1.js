const readline = require('readline-sync');

const secretNumbers = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");

while (guess !== secretNumbers) {
    let input = readline.question("Enter your number (from 1 to 100): ");
    guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
        console.log("Enter the number.");
    } else if (guess < secretNumbers) {
        console.log("My number is higher.");
    } else if (guess > secretNumbers) {
        console.log("My number is lower.");
    } else {
        console.log(`You guessed after ${attempts} attempts.`);
    }
}