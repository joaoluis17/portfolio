<template>
  <section id="home" class="w-full p-8 bg-white text-center inline-flex justify-around">
    <div class="">
      <h1 class="text-4xl font-bold mb-4">João Luis Prado</h1>
      <h2 class="text-lg text-gray-700 mb-6">
        Desenvolvedor web Front-End & Gestor de Projetos (Vue JS | Laravel | Scrum | Kanban)
      </h2>
    </div>
    <router-link to="/contact">
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 hover:py-2 hover:px-5">
        Entre em Contato
      </button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

</style>
