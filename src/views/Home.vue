<template>
  <section id="home" class="p-8 bg-white text-center">
    <h1 class="text-4xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
    <p class="text-lg text-gray-700 mb-6">
      Explore meus projetos, habilidades e entre em contato comigo.
    </p>
    <router-link to="/contact">
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
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
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  color: #333;
}
</style>
