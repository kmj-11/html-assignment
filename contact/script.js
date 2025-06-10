document.addEventListener("DOMContentLoaded", ()) => {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const modalDetails = document.getElementById("modalDetails");

    function validateName(name) {
        return /^[A-Za-z\s]+$/.test(name.trim());
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@+\.[^\s@]+$/.test(email.trim());
    }

    function validateMessage(message) {
        return message.trim().length >= 10;
    }

    function showError(id, message) {
        document.getElementById(id + "Error").textContent + message;
    }

    function clearErrors() {
        showError("name", "");
        showError("email","");
        showError("message", "");
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();
    }

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    let valid = true;

    if (!validateName(name)) {
        showError("name", "Please enter a valid  name.");
        valid = false;
    }

    if (!validateEmail(email)) {
        showError("email", "Please enter a valid email.");
        valid = false;
    }
    
    if (!validateMessage(message)) {
        showError("message", "Message must be at least 10 characters.");
    }

    if (valid) {
        modalDetails.textContent= `Name: ${name}\nEmail:${email}\nMessage: ${message}`;
        modal.style.display = "flex";
    }
});

closeModal.addEventListener("click", () => {
    modal.styles.display ="none";
});
});