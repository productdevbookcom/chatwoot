<template>
  <div class="center">
    <header>
      <div class="wrapper">
        <Logo class="logo" />
        <HelloWorld msg="Chatwoot + Vue.js" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
