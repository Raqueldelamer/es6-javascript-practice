// Arrow Functions Exercise

// Examples

// Example 1: Convert the following function to an arrow function
// function greet(name) {
//     return `Hello, ${name}!`;
// }
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice'));

// Example 2: Write an arrow function that calculates the product of two numbers
// function multiply(a, b) {
//     return a * b;
// }
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

// Example 3: Create an arrow function that checks if a number is positive
// function isPositive(num) {
//     return num > 0;
// }
const isPositive = (num) => num > 0;
console.log(isPositive(10));
console.log(isPositive(-5));

// Exercises

// 1. Convert the following function to an arrow function
// function add(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;
console.log(add(4, 4)); // output 8

// 2. Write an arrow function that takes an array of strings and returns an array of their lengths
// function getStringLengths(arr) {
//     // Your code here
const getStringLengths = (arr) => arr.map(str => str.length);
console.log(getStringLengths(["kiwi", "lemon", "coconut"]));
// }

// 3. Create an arrow function that takes two numbers and returns their difference
// function subtract(a, b) {
const subtract = (a, b) => a - b;
console.log(subtract(8, 4));
// }

// 4. Write an arrow function that takes a number and returns whether it is odd
// function isOdd(num) {
const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(8));  //false (is even)
console.log(isOdd(7));  //true (is odd)
// }

// 5. Create an arrow function that takes an array of numbers and returns the largest number in the array
// function findMax(arr) {
const findMax = (arr) => Math.max(...arr);
console.log(findMax([2, 3, 8, 9, 11]));
// }

// Solutions should be written directly below each TODO comment.
