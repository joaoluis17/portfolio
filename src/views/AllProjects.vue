<template>
  <section class="w-full px-4 pb-20 relative">
    <!-- Botão voltar no canto superior esquerdo -->
    <div class="absolute left-4 top-4">
      <router-link to="/" class=" bg-green-200 text-gray-800 py-2 px-8 rounded hover:bg-green-300 self-start">← Voltar</router-link>
    </div>

    <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Todos os Projetos</h2>

    <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-gray-600 font-medium">Filtrar por linguagem:</span>
        <select
          v-model="selectedLanguage"
          class="border border-gray-300 rounded px-3 py-2 bg-white"
        >
          <option value="">Todas</option>
          <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
        </select>
      </div>
      <div class="text-sm text-gray-500">
        {{ filteredProjects.length }} resultado(s)
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="(project, i) in filteredProjects"
        :key="i"
        ref="projectCards"
        class="bg-gray-100 p-6 rounded shadow"
        @click.stop
      >
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>

        <div v-if="selectedProject === i" class="mb-4">
          <p class="text-sm text-gray-500 mb-4">{{ project.fullDescription }}</p>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-700 hover:cursor-pointer mr-4"
          >
            Ver no GitHub
          </a>
          <a
            v-if="project.linkSite"
            :href="project.linkSite"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-700 hover:cursor-pointer"
          >
            Ver site
          </a>
        </div>

        <button
          v-if="selectedProject !== i"
          @click="showProjectDetails(i)"
          class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from '@/data/projects';

export default {
  name: 'AllProjects',
  data() {
    return {
      projects: projectsData,
      selectedProject: null,
      selectedLanguage: '',
    };
  },
  computed: {
    languages() {
      const langs = new Set();
      this.projects.forEach((p) => {
        if (p.language) langs.add(p.language);
      });
      return Array.from(langs).sort();
    },
    filteredProjects() {
      if (!this.selectedLanguage) return this.projects;
      return this.projects.filter((p) => p.language === this.selectedLanguage);
    },
  },
  methods: {
    showProjectDetails(index) {
      this.selectedProject = index;
    },
    handleClickOutside(event) {
      if (this.selectedProject === null) return;
      const cards = this.$refs.projectCards;
      const activeCard = Array.isArray(cards) ? cards[this.selectedProject] : cards;
      if (activeCard && !activeCard.contains(event.target)) {
        this.selectedProject = null;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.project-card {
  min-height: 160px;
}
</style>
