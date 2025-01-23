<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="flex justify-between items-center">
      <div class="text-2xl font-bold pl-4"><router-link to="/" class="hover:text-blue-400">Início</router-link></div>
      <ul class="flex space-x-4 pr-4">
        <li><router-link to="/about" class="hover:text-blue-400">Sobre Mim</router-link></li>
        <li><router-link to="/projects" class="hover:text-blue-400">Projetos</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-400">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
</style>
