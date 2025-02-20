<template>
  <div class="relative w-full">
    <div class="absolute top-0 right-0 flex space-x-4 p-4 mt-4">
      <a href="https://github.com/joaoluis17"><img src="../assets/github-logo.svg" class="w-10 h-10 hover:w-16 hover:h-16" alt="GitHub Logo"/></a>
      <a href="https://www.linkedin.com/in/joao-luis-prado/"><img src="../assets/linkedin-logo.svg" class="w-10 h-10 hover:w-16 hover:h-16" alt="LinkedIn Logo"/></a>
    </div>
    <section class="w-full flex flex-row px-12 items-center gap-6">
      <div id="home" class="p-8 flex flex-col items-start">
        <div class="avatar-background rounded-full overflow-hidden w-32 h-32 mb-4">
          <img src="../assets/profile-photo.jpg" height="1599" width="899" alt="Avatar-Photo"/>
        </div>
        <h1 className="text-4xl text-gray-600 dark:text-gray-200 font-bold mb-2">João Luis Prado</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200">Desenvolvedor web Front-End & Gestor de Projetos</p>
        <p className="text-sm text-gray-400 dark:text-gray-50">(Vue JS | Laravel | Scrum | Kanban) - Brasil</p>

        <div class="flex flex-wrap gap-4 mt-4">
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/front-icon.svg" class="w-5 h-5">
            <span>Front-End Developer</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/html-icon.svg" class="w-5 h-5">
            <span>HTML5</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/css-icon.svg" class="w-5 h-5">
            <span>CSS3</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/tailwind-icon.svg" class="w-5 h-5">
            <span>Tailwind CSS3</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/js-icon.svg" class="w-5 h-5">
            <span>JavaScript</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/node-icon.svg" class="w-5 h-5">
            <span>Node JS</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/vue-icon.svg" class="w-5 h-5">
            <span>Vue JS</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/php-icon.svg" class="w-5 h-5">
            <span>PHP</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/laravel-icon.svg" class="w-5 h-5">
            <span>Laravel PHP</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/filament-icon.svg" class="w-5 h-5">
            <span>Filament PHP</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/wordpress-icon.svg" class="w-5 h-5">
            <span>WordPress</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
            <img src="@/assets/mysql-icon.svg" class="w-5 h-5">
            <span>MySQL</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/scrum-master-icon.svg" class="w-5 h-5">
            <span>Agile Master</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/scrum-icon.svg" class="w-5 h-5">
            <span>Scrum</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/kanban-icon.svg" class="w-5 h-5">
            <span>Kanban</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/lean-icon.svg" class="w-5 h-5">
            <span>Lean</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/gestao-icon.svg" class="w-5 h-5">
            <span>Gestão</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/github-icon.svg" class="w-5 h-5">
            <span>GitHub</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/miro-icon.svg" class="w-5 h-5">
            <span>Miro</span>
          </label>
          <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
            <img src="@/assets/excel-icon.svg" class="w-5 h-5">
            <span>Excel</span>
          </label>
        </div>
      </div>
    </section>
  </div>
  
  <About />

  <Projects />

  <Resume />

  <ContactButton />

  <ThemeButton />

</template>

<script>
import ContactButton from '../components/ContactButton.vue';
import ThemeButton from '../components/ThemeButton.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Resume from './Resume.vue';

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Resume,
    ContactButton,
    ThemeButton
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.avatar-background {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>