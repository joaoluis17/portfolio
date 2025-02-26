<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-gray-900 dark:bg-black text-white dark:text-gray-50 p-4">
    <nav class="max-w-screen-xl mx-auto flex justify-between items-center">
      <div class="text-2xl font-bold">
        <a href="#home" @click="goToSection('home')" class="hover:text-blue-400">Início</a>
      </div>

      <button @click="menuOpen = !menuOpen" class="md:hidden p-2 text-gray-400 hover:text-white">
        <svg v-if="!menuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <ul
        :class="menuOpen ? 'block' : 'hidden'" @click.away="menuOpen = false"
        class="absolute z-50 md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex flex-col md:flex-row items-center md:space-x-4 p-4 md:p-0">
        <li><a href="#about" @click="goToSection('about')" class="block py-2 px-3 hover:text-blue-400">Sobre Mim</a></li>
        <li><a href="#projects" @click="goToSection('projects')" class="block py-2 px-3 hover:text-blue-400">Projetos</a></li>
        <li><a href="#resume" @click="goToSection('resume')" class="block py-2 px-3 hover:text-blue-400">Currículo</a></li>
        <li><router-link to="/contact" class="block py-2 px-3 hover:text-blue-400" @click="menuOpen = false">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, 
    };
  },
  methods: {
    goToSection(section) {
      this.$router.push('/');
      this.$nextTick(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
      this.menuOpen = false;
    },
  },
};
</script>
