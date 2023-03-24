<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LiveScanner from "./components/LiveScanner.vue";
</script>

<template>

  <header>

    <h5 style="text-align: center">Suspicious Barcode-Scanner</h5>

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LiveScanner">Scanner</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header h5 {
    font-family: monospace;
    text-align: center;
    color: darkgreen;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    align-content: center;
    text-align: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  header h5 {
    font-family: monospace;
    text-align: center;
    color: darkgreen;
  }
}
</style>
