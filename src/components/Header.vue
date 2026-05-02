<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-gray-900 dark:bg-black text-white dark:text-gray-50 p-4 overflow-x-hidden">
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

      <ul :class="menuOpen ? 'block' : 'hidden'"
        class="fixed z-50 md:relative top-16 md:top-auto left-0 right-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex flex-col md:flex-row items-center md:space-x-4 p-4 md:p-0"
      >
        <li>
          <a href="#about" @click="goToSection('about')" class="block py-2 px-3 hover:text-blue-400">Sobre Mim</a>
        </li>
        <li>
          <a href="#projects" @click="goToSection('projects')" class="block py-2 px-3 hover:text-blue-400">Projetos</a>
        </li>
        <li>
          <a href="#management" @click="goToSection('management')" class="block py-2 px-3 hover:text-blue-400">Gestão</a>
        </li>

        <!-- MOBILE ONLY: Histórico -->
        <li class="block md:hidden">
          <a href="#history" @click="goToSection('history')" class="block py-2 px-3 hover:text-blue-400">Histórico</a>
        </li>

        <!-- MOBILE ONLY: Experiências -->
        <li class="block md:hidden">
          <a href="#resume" @click="goToSection('resume')" class="block py-2 px-3 hover:text-blue-400">Experiências</a>
        </li>

        <!-- DESKTOP ONLY: Histórico/Experiências -->
        <li class="hidden md:block">
          <a href="#resume" @click="goToSection('resume')" class="block py-2 px-3 hover:text-blue-400">Histórico/Experiências</a>
        </li>

        <li>
          <a href="#certificates" @click="goToSection('certificates')" class="block py-2 px-3 hover:text-blue-400">Cursos e Certificados</a>
        </li>

        <li>
          <a href="#contact" @click="goToSection('contact')" class="block py-2 px-3 hover:text-blue-400">Contato</a>
        </li>

        <li>
          <button @click.stop="toggleDark(); menuOpen = false" class="block py-2 px-3 hover:text-blue-400">
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
            </svg>
          </button>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  data() {
    return {
      menuOpen: false, 
    };
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return { isDark, toggleDark };
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
