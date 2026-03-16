<template>
  <div class="relative w-full">
    <div class="absolute top-0 right-0 flex space-x-4 p-4 mt-4">
        <a href="https://github.com/joaoluis17" target="_blank" rel="noopener noreferrer" title="GitHub">
          <div class="rounded-xl border-gray-150 p-0">
            <img src="../assets/github-logo.svg" class="w-10 h-10 hover:w-16 hover:h-16" alt="GitHub Logo"/>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/joao-luis-prado/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <div class="rounded-xl border-gray-150 p-0">
            <img src="../assets/linkedin-logo.svg" class="w-10 h-10 hover:w-16 hover:h-16" alt="LinkedIn Logo"/>
          </div>
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <div class="rounded-xl p-0 cursor-pointer">
            <img 
              src="../assets/pdf-icon.svg" 
              class="w-10 h-10 hover:w-16 hover:h-16 transition-all duration-200" 
              alt="Currículo PDF"
              title="Currículo"
            />
          </div>
        </a>
    </div>

    <section class="w-full flex flex-row px-4 items-center gap-6">
      <div id="home" class="p-8 flex flex-col items-start">

        <div class="avatar-background rounded-full overflow-hidden w-32 h-32 mb-4">
          <img src="../assets/profile-photo.jpg" height="1599" width="899" alt="Avatar-Photo"/>
        </div>

        <h1 class="text-4xl text-gray-600 dark:text-gray-200 font-bold mb-2">João Luis Prado</h1>
        <p class="text-lg text-gray-600 dark:text-gray-200">Desenvolvedor Full-Stack & Gestor de Projetos</p>
        <p class="text-sm text-gray-400 dark:text-gray-50">(JavaScript | Vue JS | PHP | Laravel | Scrum | Kanban) - Brasil</p>


        <!-- BOTÕES DE CATEGORIA -->
        <div class="flex gap-4 mt-4">
          <button
            @click="toggleCategory('dev')"
            class="px-4 py-2 bg-green-300 text-green-900 rounded-full shadow-sm"
          >
            Desenvolvimento
          </button>

          <button
            @click="toggleCategory('gestao')"
            class="px-4 py-2 bg-blue-300 text-blue-900 rounded-full shadow-sm"
          >
            Gestão
          </button>

          <button
            @click="toggleCategory('soft')"
            class="px-4 py-2 bg-slate-300 text-slate-900 rounded-full shadow-sm"
          >
            Soft Skills
          </button>
        </div>


        <div class="flex flex-wrap gap-4 mt-4">

          <!-- DESENVOLVIMENTO -->
          <div v-if="activeCategory === 'dev'" class="grid grid-cols-6 gap-4">

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/html-icon.svg" class="w-8 h-8">
              <span>HTML5</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/css-icon.svg" class="w-8 h-8">
              <span>CSS3</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/tailwind-icon.svg" class="w-8 h-8">
              <span>Tailwind CSS3</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/js-icon.svg" class="w-8 h-8">
              <span>JavaScript</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/vue-icon.svg" class="w-8 h-8">
              <span>Vue JS</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/alpine-icon.svg" class="w-8 h-8">
              <span>Alpine JS</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/node-icon.svg" class="w-8 h-8">
              <span>Node JS</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/react-icon.svg" class="w-8 h-8">
              <span>React JS</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/react-native-icon.svg" class="w-8 h-8">
              <span>React Native</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/typescript-icon.svg" class="w-8 h-8">
              <span>TypeScript</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/php-icon.svg" class="w-8 h-8">
              <span>PHP</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/laravel-icon.svg" class="w-8 h-8">
              <span>Laravel PHP</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/filament-icon.svg" class="w-8 h-8">
              <span>Filament PHP</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/python-icon.svg" class="w-8 h-8">
              <span>Python</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/mysql-icon.svg" class="w-8 h-8">
              <span>MySQL</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/wordpress-icon.svg" class="w-8 h-8">
              <span>WordPress</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/hubspot-icon.svg" class="w-8 h-8">
              <span>HubSpot</span>
            </label>
            
            <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
              <img src="@/assets/rd-station-icon.svg" class="w-8 h-8">
              <span>Rd Station</span>
            </label>

          </div>


          <!-- GESTÃO -->
          <div v-if="activeCategory === 'gestao'" class="grid grid-cols-6 gap-4">

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
              <img src="@/assets/okr-icon.svg" class="w-5 h-5">
              <span>OKR</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
              <img src="@/assets/github-icon.svg" class="w-5 h-5">
              <span>GitHub</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
              <img src="@/assets/clickup-icon.svg" class="w-5 h-5">
              <span>ClickUp</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
              <img src="@/assets/miro-icon.svg" class="w-5 h-5">
              <span>Miro</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
              <img src="@/assets/trello-icon.svg" class="w-5 h-5">
              <span>Trello</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
              <img src="@/assets/excel-icon.svg" class="w-5 h-5">
              <span>Excel</span>
            </label>

          </div>


          <!-- SOFT SKILLS -->
          <div v-if="activeCategory === 'soft'" class="grid grid-cols-5 gap-4">

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/gestao-icon.svg" class="w-5 h-5">
              <span>Gestão Ágil</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/adaptation-icon.svg" class="w-5 h-5">
              <span>Adaptação</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/communication-icon.svg" class="w-5 h-5">
              <span>Comunicação Eficaz</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/problems-icon.svg" class="w-5 h-5">
              <span>Resolução de Problemas</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/think-icon.svg" class="w-5 h-5">
              <span>Pensamento Crítico</span>
            </label>

            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/work-icon.svg" class="w-5 h-5">
              <span>Trabalho em Equipe</span>
            </label>
            
            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/empathy-icon.svg" class="w-5 h-5">
              <span>Empatia</span>
            </label>
            
            <label class="badge flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm">
              <img src="@/assets/continue-learning-icon.svg" class="w-5 h-5">
              <span>Aprendizado Contínuo</span>
            </label>

          </div>

        </div>
      </div>
    </section>
  </div>

  <About />
  <Projects />

  <section id="historico-experiencias" class="flex flex-col lg:flex-row gap-8 items-start">
    <div class="w-full lg:w-1/2">
      <History />
    </div>
    <div class="w-full lg:w-1/2">
      <Resume />
    </div>
  </section>

  <Certificates />

  <ContactButton />
  <ThemeButton />
  <BackToUpButton />
</template>


<script>
import BackToUpButton from '../components/BackToUpButton.vue';
import ContactButton from '../components/ContactButton.vue';
import ThemeButton from '../components/ThemeButton.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Resume from './Resume.vue';
import History from './History.vue';
import Certificates from './Certificates.vue';
import AllCertificates from './AllCertificates.vue';

export default {
  name: 'Home',

  data() {
    return {
      activeCategory: null
    }
  },

  methods: {
    toggleCategory(category) {
      this.activeCategory =
        this.activeCategory === category ? null : category
    }
  },

  components: {
    About,
    Projects,
    Resume,
    History,
    Certificates,
    AllCertificates,
    ContactButton,
    ThemeButton,
    BackToUpButton
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

/* .badge {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding-left: 1rem;
   padding-right: 1rem;
   padding-top: 0.5rem;
   padding-bottom: 0.5rem;
   width: 100%;
   border-radius: 9999px;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
} */
</style>