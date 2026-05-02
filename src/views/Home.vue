<template>
  <section class="relative w-full max-w-6xl">
    <div class="absolute top-0 right-0 flex space-x-4 p-4 mt-4">
        <a href="https://github.com/joaoluis17" target="_blank" rel="noopener noreferrer" title="GitHub">
          <div class="rounded-xl border-gray-150 p-0">
            <img src="../assets/github-logo.svg" class="w-10 h-10 hover:w-16 hover:h-16 transition-all duration-200" alt="GitHub Logo"/>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/joao-luis-prado/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <div class="rounded-xl border-gray-150 p-0">
            <img src="../assets/linkedin-icon.svg" class="w-10 h-10 hover:w-16 hover:h-16 transition-all duration-200" alt="LinkedIn Logo"/>
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

    <section class="w-full flex flex-col md:flex-row px-4 items-center gap-6 overflow-hidden">
      <div id="home" class="py-8 flex flex-col items-start min-w-0">

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
            class="category-button px-4 py-2 bg-green-300 text-green-900 rounded-full shadow-sm"
          >
            Desenvolvimento
          </button>

          <button
            @click="toggleCategory('gestao')"
            class="category-button px-4 py-2 bg-blue-300 text-blue-900 rounded-full shadow-sm"
          >
            Gestão
          </button>

          <button
            @click="toggleCategory('soft')"
            class="category-button px-4 py-2 bg-slate-300 text-slate-900 rounded-full shadow-sm"
          >
            Soft Skills
          </button>
        </div>


        <div class="flex flex-wrap gap-4 mt-4">
          <!-- DESENVOLVIMENTO -->
          <div v-if="activeCategory === 'dev'" class="flex flex-wrap gap-4">
            <label
              v-for="skill in devSkills"
              :key="skill.icon"
              class="badge basis-1/6 w-fit flex justify-center items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm"
            >
              <img :src="skill.icon" class="shrink-0" :class="skill.iconClass || 'w-5 h-5'">
              <span class="whitespace-nowrap">{{ skill.name }}</span>
            </label>
          </div>


          <!-- GESTÃO -->
          <div v-if="activeCategory === 'gestao'" class="flex flex-wrap gap-4">
            <label
              v-for="skill in gestaoSkills"
              :key="skill.icon"
              class="badge basis-1/6 w-fit flex justify-center items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm"
            >
              <img :src="skill.icon" class="shrink-0" :class="skill.iconClass || 'w-5 h-5'">
              <span class="whitespace-nowrap">{{ skill.name }}</span>
            </label>
          </div>

          <!-- SOFT SKILLS -->
          <div v-if="activeCategory === 'soft'" class="flex flex-wrap gap-4">
            <label
              v-for="skill in softSkills"
              :key="skill.icon"
              class="badge basis-1/4 flex justify-center items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-full shadow-sm"
            >
              <img :src="skill.icon" class="shrink-0" :class="skill.iconClass || 'w-5 h-5'">
              <span class="whitespace-nowrap">{{ skill.name }}</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  </section>

  <About />
  <Projects />
  <Management />

  <section id="historico-experiencias" class="flex flex-col lg:flex-row gap-8 items-start">
    <div class="w-full lg:w-1/2">
      <History />
    </div>
    <div class="w-full lg:w-1/2">
      <Resume />
    </div>
  </section>

  <Certificates />

  <Contact />

  <BackToUpButton />
</template>


<script>
import BackToUpButton from '../components/BackToUpButton.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Management from './Management.vue';
import Resume from './Resume.vue';
import History from './History.vue';
import Certificates from './Certificates.vue';
import AllCertificates from './AllCertificates.vue';
import { devSkills, gestaoSkills, softSkills } from '@/data/skills'
import Contact from './Contact.vue';

export default {
  name: 'Home',

  data() {
    return {
      activeCategory: null,

      devSkills,
      gestaoSkills,
      softSkills
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
    Management,
    Resume,
    History,
    Certificates,
    AllCertificates,
    Contact,
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

.category-button {
  transform: scale(1);
  transform-origin: center;
  transition:
    transform 0.65s ease,
    box-shadow 0.65s ease,
    filter 0.65s ease;
  will-change: transform;
}

.category-button:hover {
  transform: scale(1.12);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
  filter: saturate(1.05);
}

.category-button:focus-visible {
  transform: scale(1.12);
  outline: none;
}

@media (prefers-reduced-motion: reduce) {
  .category-button {
    transition: none;
  }
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
