// ==========================
// TASK 7.1 – VARIABLES & DATA TYPES
// ==========================

let name = "Lucy Wachu";
let age = 19;
const birthYear = 2007;

console.log("Name:", name);
console.log("Age:", age);
console.log("Birth Year:", birthYear);

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of true:", typeof true);

// More examples
let isStudent = true;
let favoriteColors = ["pink", "red", "violet"];
let today = new Date();

console.log("Is student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today:", today);


// ==========================
// TASK 7.2 – OPERATORS
// ==========================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

let count = 0;
count++;
count--;

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

// Age calculations
let myAge = 19;
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurning100 = 2026 + (100 - myAge);

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year turning 100:", yearTurning100);


// ==========================
// TASK 7.3 – FUNCTIONS
// ==========================

// Function declaration
function greet(personName) {
    return `Hello, ${personName}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow functions
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Lucy"));
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(divide(10, 2));


// Extra practice functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Area:", calculateArea(5, 10));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 10 even?", isEven(10));
console.log("Initials:", getInitials("Lucy Wachu"));
console.log("Reversed:", reverseString("JavaScript"));


// ==========================
// DEFAULT PARAMETERS
// ==========================

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));


// ==========================
// TIP CALCULATOR
// ==========================

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Tip on 100:", calculateTip(100));
console.log("Tip on 200 with 20%:", calculateTip(200, 20));


// ==========================
// TASK 7.4 – CONTROL FLOW
// ==========================

function getGrade(score) {

    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";

}

console.log("Grade for 85:", getGrade(85));


// Switch example

function getDayName(dayNumber) {

    switch(dayNumber) {

        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";

    }

}

console.log("Day:", getDayName(3));


// ==========================
// LOOPS
// ==========================

for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

let counter = 1;

while (counter <= 5) {
    console.log("While loop:", counter);
    counter++;
}

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log("Color:", color);
}


// ==========================
// MINI CALCULATOR PROJECT
// ==========================

function addNumbers(a, b) { return a + b; }

function subtractNumbers(a, b) { return a - b; }

function multiplyNumbers(a, b) { return a * b; }

function divideNumbers(a, b) {

    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a / b;

}

function calculate(num1, operator, num2) {

    switch(operator) {

        case "+": return addNumbers(num1, num2);
        case "-": return subtractNumbers(num1, num2);
        case "*": return multiplyNumbers(num1, num2);
        case "/": return divideNumbers(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";

    }

}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));


// ==========================
// TASK 8 – ARRAYS
// ==========================

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);


// ==========================
// TASK 8.3 – ARRAY OF OBJECTS
// ==========================

const students = [

    {name:"Alice", age:22, grade:85, major:"CS"},
    {name:"Bob", age:20, grade:72, major:"Math"},
    {name:"Charlie", age:23, grade:90, major:"CS"},
    {name:"Diana", age:21, grade:88, major:"Physics"},
    {name:"Eve", age:22, grade:95, major:"CS"}

];

const studentNames = students.map(s => s.name);
console.log("Names:", studentNames);

const highAchievers = students.filter(s => s.grade > 80);
console.log("High achievers:", highAchievers);

const charlie = students.find(s => s.name === "Charlie");
console.log("Charlie:", charlie);

const avgGrade =
students.reduce((total, s) => total + s.grade, 0) / students.length;

console.log("Average grade:", avgGrade);


// ==========================
// GRADE TRACKER PROJECT
// ==========================

const gradeTracker = {

students: [],

addStudent(name, grades) {
this.students.push({ name, grades });
},

getStudent(name) {
return this.students.find(s => s.name === name) || null;
},

getStudentAverage(name) {

const student = this.getStudent(name);

if (!student) return null;

const grades = Object.values(student.grades);
const sum = grades.reduce((a, b) => a + b, 0);

return (sum / grades.length).toFixed(2);

},

getTopStudent() {

let top = null;
let highest = 0;

this.students.forEach(student => {

const avg = this.getStudentAverage(student.name);

if (avg > highest) {
highest = avg;
top = student.name;
}

});

return top;

}

};


// TEST DATA

gradeTracker.addStudent("Lucy", {math:85, english:88, science:92});
gradeTracker.addStudent("John", {math:72, english:75, science:70});
gradeTracker.addStudent("Mary", {math:90, english:95, science:88});

console.log("Lucy average:", gradeTracker.getStudentAverage("Lucy"));
console.log("Top student:", gradeTracker.getTopStudent());