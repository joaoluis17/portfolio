<template>
  <section id="projects" class="w-full px-4 items-start text-left">
      <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Projetos</h2>
      
      <div class="flex items-center justify-center">
        <!-- Botão Esquerda - SVG estilizado (fora dos cards, ao lado esquerdo) -->
        <button
          @click="scrollLeft"
          aria-label="Scroll left"
          class="flex-none bg-white rounded-full p-2 shadow hover:scale-105 transition mr-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Lista de Projetos com Scroll (barra escondida) -->
        <div class="w-full max-w-5xl">
          <div ref="scrollContainer" class="flex justify-center overflow-x-auto scroll-smooth space-x-4 py-4 hide-scrollbar">
            <div
                v-for="(project, index) in projects.slice(0, 4)"
                :key="index"
                class="project-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-56 shrink-0"
            >
                <h3 class="text-xl text-gray-600 font-bold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600">{{ project.description }}</p>
                <button 
                    @click.stop="showProjectDetails(index)" 
                    class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Ver Detalhes
                </button>
            </div>
          </div>
        </div>

        <!-- Botão Direita - SVG estilizado (fora dos cards, ao lado direito) -->
        <button
          @click="scrollRight"
          aria-label="Scroll right"
          class="flex-none bg-white rounded-full p-2 shadow hover:scale-105 transition ml-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Botão para ver todos os projetos -->
      <div class="mt-2 flex justify-end">
        <router-link to="/projects" class="bg-blue-400 text-white py-2 px-4 mr-12 rounded hover:bg-blue-700">Ver todos os projetos</router-link>
      </div>

      <div 
          v-if="selectedProject !== null" 
          ref="projectDetails"
          class="project-details mt-8 p-6 bg-gray-100 rounded shadow-lg"
          @click="closeProjectDetails"
      >
          <h3 class="text-2xl text-gray-600 font-bold mb-4">
              {{ projects[selectedProject].title }}
          </h3>
          <p class="text-lg text-gray-600">
              {{ projects[selectedProject].fullDescription }}
          </p>
          <div class="mt-4">
            <a 
              :href="projects[selectedProject].link"
              target="_blank"
              class="text-blue-400 hover:text-blue-700 mr-4"
            >
                Ver no GitHub
            </a>
            <a 
              v-if="projects[selectedProject].linkSite" 
              :href="projects[selectedProject].linkSite"
              target="_blank"
              class="text-blue-400 hover:text-blue-700"
            >
                Link do Site
            </a>
          </div>
      </div>
  </section>
</template>

<script>
import projects from '@/data/projects';

export default {
  name: 'Projects',
  data() {
    return {
      selectedProject: null,
      projects,
    };
  },
  methods: {
    showProjectDetails(index) {
      this.selectedProject = index;
    },
    closeProjectDetails() {
      this.selectedProject = null;
    },
    handleClickOutside(event) {
      if (this.selectedProject !== null && this.$refs.projectDetails && !this.$refs.projectDetails.contains(event.target)) {
        this.closeProjectDetails();
      }
    },
    scrollLeft() {
      const step = 240; // approx card width (224) + gap
      this.$refs.scrollContainer.scrollBy({ left: -step, behavior: 'smooth' });
    },
    scrollRight() {
      const step = 240;
      this.$refs.scrollContainer.scrollBy({ left: step, behavior: 'smooth' });
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  height: 8px;
}
.hide-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.15);
  border-radius: 9999px;
}
.hide-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.15) transparent;
}
</style>
