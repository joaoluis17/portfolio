<template>
  <Header />
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="font-roboto-flex app-container max-w-5xl">
      <main class="pt-16">
        <router-view />
      </main>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<style>
* {
  font-family: roboto-flex ;
}
body {
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
}

main {
  width: 100%;
  text-align: center;
}
</style>
