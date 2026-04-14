// =========================
// WEEK 4 JAVASCRIPT FUNDAMENTALS
// Calculator + Grade Tracker
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

// NEW (FIXED PART)
function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}


// MAIN CALCULATOR FUNCTION
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
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}


// =========================
// CALCULATOR TESTS
// =========================

console.log("🧮 Calculator Tests:");
console.log(calculate(10, "+", 5));
console.log(calculate(20, "-", 8));
console.log(calculate(6, "*", 3));
console.log(calculate(10, "/", 2));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 3));


// =========================
// GRADE TRACKER
// =========================

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

console.log("🎓 Grade Tracker Tests:");
console.log("85 →", getGrade(85));
console.log("72 →", getGrade(72));
console.log("60 →", getGrade(60));
console.log("45 →", getGrade(45));

// =========================
// ARRAY OF OBJECTS (BASIC DEMO)
// =========================

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 }
];

// Get all names
const names = students.map(student => student.name);
console.log("Names:", names);

// Get students above 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// Find Charlie
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// Average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average Grade:", avgGrade);