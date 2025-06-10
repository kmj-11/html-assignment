// script.js

// Function to display a greeting message
function showGreeting() {
const message = document.getElementById("message");
message.textContent = "Thank you for visiting!";
message.style.display = "block";
}

// Add a click event listener to the button
document.addEventListener("DOMContentLoaded", function () {
const button = document.getElementById("greetButton");
button.addEventListener("click", showGreeting);
});
