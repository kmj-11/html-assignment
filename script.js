// script.js

// function showGreeting() {
const message = document.getElementById("message");
message.textContent = "Welcome to my Hobby Portfolio";
message.style.display = "block";
}

// Add a click event to the button
document.addEventListener("DOMContentLoaded", function () {
const button = document.getElementById("greetButton");
button.addEventListener("click", showGreeting);
}