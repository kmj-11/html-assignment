# Assignment 8 – Vue Router Navigation

This project is based on Module 8 and is part of my Front End Web Development Course. I used Vue.js and Vue Router to create a basic multi-page site with navigation and dynamic routing. The goal was to practice setting up page routes, linking between them, and handling unknown pages.

---

## ✅ Features

- 3 main pages: Home, About, and Contact
- Navigation menu using `<router-link>`
- Dynamic user route (e.g. `/user/kayla`)
- 404 fallback page for routes that don’t exist
- Clean, working layout and routing with no page reloads

---

## 🧩 Pages and Routes

- `/` → Home.vue 
- `/about` → About.vue 
- `/contact` → Contact.vue 
- `/user/:username` → User.vue (shows the username in the URL) 
- `/:pathMatch(.*)*` → NotFound.vue (404 page)

All views are located in the `src/views/` folder.

---

## ⚙️ Technologies Used

- Vue 3 (with Vite)
- Vue Router 4
- VS Code for coding
- Git for version control
- Browser DevTools for testing

---

## 🧠 What I Learned

- How to create routes with Vue Router
- How to use `router-link` and `router-view`
- How dynamic and fallback routes work
- How to split views into separate components
- The importance of folder structure and clean file naming

---