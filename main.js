// =========================
// WEEK 4 START
// =========================

// VARIABLES
let name = "Lucy";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

// =========================
// CALCULATOR FUNCTIONS
// =========================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// TEST CALCULATOR
console.log(calculate(10, "+", 5));
console.log(calculate(20, "-", 8));
console.log(calculate(6, "*", 3));
console.log(calculate(10, "/", 2));