<template>
  <div class="app-root w-full flex flex-col justify-between overflow-x-hidden">
    <Header />
    <section class="flex-1 bg-gradient-to-bl from-gray-50 to-white dark:bg-gradient-to-tl dark:from-gray-200 dark:to-gray-800">
      <div class="font-roboto-flex app-container max-w-5xl mx-auto h-full">
        <main class="pt-16 h-full">
          <router-view />
        </main>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<style>
html,
body,
#app {
  min-height: 100%;
  overflow-x: hidden; /* <-- adicione isso */
  width: 100%;
}

* {
  font-family: roboto-flex;
  box-sizing: border-box; /* <-- adicione isso também */
}

body {
  margin: 0;
}
</style>
