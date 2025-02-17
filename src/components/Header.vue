<template>
  <header class="bg-gray-900 dark:bg-black bg text-white dark:text-gray-50 p-4">
    <nav class="flex justify-between items-center">
      <div class="text-2xl font-bold pl-4">
        <a href="#home" @click="goToSection('home')" class="hover:text-blue-400">Início</a>
      </div>
      <ul class="flex space-x-4 pr-4">
        <li><a href="#about" @click="goToSection('about')" class="hover:text-blue-400">Sobre Mim</a></li>
        <li><a href="#projects" @click="goToSection('projects')" class="hover:text-blue-400">Projetos</a></li>
        <li><a href="#resume" @click="goToSection('resume')" class="hover:text-blue-400">Currículo</a></li>
        <li><router-link to="/contact" class="hover:text-blue-400">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  methods: {
    // Função de navegação suave para a seção
    goToSection(section) {
      // Navega para a tela inicial
      this.$router.push('/');

      // Aguarda a renderização da página e faz o scroll para a seção
      this.$nextTick(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

</style>