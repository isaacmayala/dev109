// Prompt user for a number and convert it to a valid number
let num = prompt("Enter a number (0-10):", "5");
num = Number(num);
if (isNaN(num) || num < 0 || num > 10) {
    num = 0; // Default to 0 if invalid
}

// Initialize the message variable with a heading
let msg = "<h2>Multiplication Table</h2>";

// Loop to generate multiplication table
for (let i = 1; i <= 10; i++) {
    msg += `${num} x ${i} = ${num * i} <br>`;
}

// Display multiplication table inside the chalkboard div
document.getElementById('blackboard').innerHTML = msg;
