<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
nav {
  background-color: #f8f8f8;
  padding: 15px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-active {
  color: #007acc;
}

main {
  padding: 20px;
}
</style>