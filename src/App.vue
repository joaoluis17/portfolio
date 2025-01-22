<template>
  <div class="font-sans">
    <Header />
    <main>
      <About />
      <Projects />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Adicione estilos gerais ou use o Tailwind */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
