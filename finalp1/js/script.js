// script.js

// Function to validate the contact form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || email === "" || comment === "") {
        alert("All fields must be filled out");
        return false; // Prevent form submission
    }

    // Basic email validation (you can add more robust validation)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    return true; // Allow form submission
}

// Attach the validation function to the form's submit event
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent default form submission if validation fails
    }
});
