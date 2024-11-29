<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Logo from './components/Logo.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Logo class="logo" />
      <HelloWorld msg="Chatwoot + Vue.js" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 2rem auto;
  height: 3rem;
  width: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 2rem 0;
    height: 3rem;
    width: auto;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
