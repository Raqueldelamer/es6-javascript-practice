// Default Parameters Exercise

// Instructions: 
// In this exercise, you will practice using default parameters in JavaScript functions. Default parameters allow you to specify default values for function arguments if they are not provided by the caller.
// Complete the examples and exercises below using default parameters where applicable.

// Examples

// Example 1: Use default parameters to provide a default greeting
// function greet(name) {
//     return `Hello, ${name}!`;
// }
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!

// Example 2: Provide a default value for a function parameter
// function multiply(a, b) {
//     return a * b;
// }
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 3)); // Output: 15

// Example 3: Use default parameters for multiple arguments
// function introduce(name, age) {
//     return `${name} is ${age} years old.`;
// }
function introduce(name = 'Unknown', age = 'unknown age') {
  return `${name} is ${age} years old.`;
}
console.log(introduce()); // Output: Unknown is unknown age years old.
console.log(introduce('Bob', 25)); // Output: Bob is 25 years old.

// Exercises

// 1. Create a function that calculates the area of a rectangle with a default height of 10
// function calculateArea(width, height) {

function calculateArea(width, height = 10) {
  return width * height;
}

console.log(calculateArea(2));       // output 20 (2 * 10)
console.log(calculateArea(5, 10));   // output 50 (5 * 10)
//     // Your code here
// }

// 2. Write a function that greets a person with a default name of 'Stranger'
// function sayHello(name) {
//     // Your code here
function sayHello(name = 'Stranger') {
  console.log(`Hello, ${name}!`);
}

sayHello();         // Output Hello, Stranger!
sayHello('Minou');  // Output Hello, Minou!
// }

// 3. Create a function that returns the sum of two numbers, with the second number defaulting to 0
// function add(a, b) {
//     // Your code here
function add(a, b = 0) {
  return a + b;
}

console.log(add(5));      // Output 5 
console.log(add(5, 5));   // Output 10 = (5 + 3)
// }

// 4. Write a function that returns a person's full name, with a default last name of 'Doe'
// function getFullName(firstName, lastName) {
//     // Your code here
function getFullName(firstName, lastName = 'Doe') {
  return `${firstName} ${lastName}`;
}

console.log(getFullName('John'));   // Output John Doe 

// }

// 5. Create a function that prints a person's favorite color, with the color defaulting to 'blue'
// function favoriteColor(color) {
//     // Your code here
function favoriteColor(color = 'blue') {
  console.log(`Your favorite color is ${color}.`);
}

favoriteColor();  // output= Your favorite color is blue.
// }

// Solutions should be written directly below each TODO comment.