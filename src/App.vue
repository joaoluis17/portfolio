<template>
  <div class="font-sans">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Adicione estilos gerais ou use o Tailwind */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
