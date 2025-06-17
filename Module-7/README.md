# Assignment 7 – Vue Contact Form

This project is part of Module 7. I rebuilt my contact form using Vue.js. The form checks if the input is valid as the user types and shows a message in a pop-up when the form is submitted.

---

## 🌟 What the form includes

- A field for Name, Email, and Message
- The form checks if:
  - The name only has letters
  - The email is in the right format
  - The message is at least 10 characters long
- If any input is wrong, it shows an error below that field
- The Send button is only active if everything is filled in correctly
- When the form is submitted, a message pops up with the info the user entered

---

## 🧩 Components I used

### ContactForm.js
- This is the main form
- It handles all the typing, checking, and showing errors
- It also shows the modal when the form is valid

### Modal.js
- This is the pop-up that shows after submitting the form
- It displays the name, email, and message
- It has a close (×) button to hide the pop-up

---

## 💻 How I built it

- I used Vue.js through a CDN (so no need to install extra tools)
- The code uses `v-model` to update form fields
- It uses `v-if` to show or hide error messages and the modal
- Props are used to pass values like placeholder text
- I split everything into different files to keep it organized

---

## 🎨 Styling

- I used CSS to make the form neat and simple
- I added spacing and colors for better readability
- I made sure it looks good on phones too by using media queries

---

