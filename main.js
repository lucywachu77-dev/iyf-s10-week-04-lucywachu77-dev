// =========================
// WEEK 4 JAVASCRIPT FUNDAMENTALS
// Calculator + Grade Tracker
// Author: Lucy Wachu
// =========================


// =========================
// VARIABLES
// =========================

let name = "Lucy";
let age = 19;
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

// Main calculator function
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


// =========================
// CALCULATOR TESTS
// =========================

console.log("Calculator Tests:");
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(20, "-", 8));  // 12
console.log(calculate(6, "*", 3));   // 18
console.log(calculate(10, "/", 2));  // 5


// =========================
// GRADE TRACKER
// =========================

// Function to determine grade
function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}


// =========================
// GRADE TRACKER TESTS
// =========================

console.log("Grade Tracker Tests:");
console.log("85 →", getGrade(85));
console.log("72 →", getGrade(72));
console.log("60 →", getGrade(60));
console.log("45 →", getGrade(45));