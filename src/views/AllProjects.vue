<template>
  <section class="w-full px-4 pb-20">

    <!-- Header: Voltar + Título -->
    <div class="flex items-center gap-4 mb-8 mt-4">
      <router-link
        to="/"
        class="bg-green-200 text-gray-800 py-2 px-4 rounded hover:bg-green-300 text-sm shrink-0"
      >
        ← Voltar
      </router-link>
      <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-200 font-bold">
        Todos os Projetos
      </h2>
    </div>

    <!-- Filtros -->
    <div class="mb-6 flex flex-col gap-3">
      <span class="text-gray-600 dark:text-gray-200 font-medium text-sm">Filtrar por:</span>

      <div class="flex flex-wrap gap-3 items-center">

        <!-- Dropdown Linguagem -->
        <div class="relative" ref="langFilter" @click.stop="" @keydown.esc="isOpenLanguages = false">
          <button
            type="button"
            @click="toggleDropdown('languages')"
            class="inline-flex items-center gap-2 whitespace-nowrap rounded-sm border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm font-medium tracking-wide transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:focus-visible:outline-neutral-300"
            :class="isOpenLanguages ? 'text-neutral-900 dark:text-gray-200' : 'text-neutral-600 dark:text-neutral-300'"
            aria-haspopup="true"
            :aria-expanded="isOpenLanguages"
          >
            Linguagem
            <svg aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </button>

          <div
            v-show="isOpenLanguages"
            class="absolute top-11 left-0 flex w-fit min-w-48 flex-col overflow-hidden rounded-sm border border-neutral-300 bg-neutral-50 py-1.5 dark:border-neutral-700 dark:bg-neutral-900 z-10"
          >
            <button
              v-for="lang in languages"
              :key="lang"
              @click="toggleLanguage(lang)"
              class="text-left bg-neutral-50 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:bg-neutral-900/10 focus-visible:text-neutral-900 focus-visible:outline-hidden dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-50/5 dark:hover:text-white dark:focus-visible:bg-neutral-50/10 dark:focus-visible:text-white"
            >
              <span>{{ lang }}</span>
              <span v-if="selectedLanguages.includes(lang)" class="ml-2 text-xs text-green-600">✔</span>
            </button>
          </div>
        </div>

        <!-- Dropdown Frameworks -->
        <div class="relative" ref="frameworkFilter" @click.stop="" @keydown.esc="isOpenFrameworks = false">
          <button
            type="button"
            @click="toggleDropdown('frameworks')"
            class="inline-flex items-center gap-2 whitespace-nowrap rounded-sm border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm font-medium tracking-wide transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:focus-visible:outline-neutral-300"
            :class="isOpenFrameworks ? 'text-neutral-900 dark:text-gray-200' : 'text-neutral-600 dark:text-neutral-300'"
            aria-haspopup="true"
            :aria-expanded="isOpenFrameworks"
          >
            Frameworks
            <svg aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </button>

          <div
            v-show="isOpenFrameworks"
            class="absolute top-11 left-0 flex w-fit min-w-48 flex-col overflow-hidden rounded-sm border border-neutral-300 bg-neutral-50 py-1.5 dark:border-neutral-700 dark:bg-neutral-900 z-10"
          >
            <button
              v-for="fw in frameworks"
              :key="fw"
              @click="toggleFramework(fw)"
              class="text-left bg-neutral-50 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900 focus-visible:bg-neutral-900/10 focus-visible:text-neutral-900 focus-visible:outline-hidden dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-50/5 dark:hover:text-white dark:focus-visible:bg-neutral-50/10 dark:focus-visible:text-white"
            >
              <span>{{ fw }}</span>
              <span v-if="selectedFrameworks.includes(fw)" class="ml-2 text-xs text-green-600">✔</span>
            </button>
          </div>
        </div>

        <!-- Contador + Limpar -->
        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ filteredProjects.length }} resultado(s)
          </span>
          <button
            @click="clearAllFilters"
            class="inline-flex items-center rounded-sm border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
          >
            Limpar todos
          </button>
        </div>
      </div>

      <!-- Tags selecionadas -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="lang in selectedLanguages"
          :key="'l-' + lang"
          class="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
        >
          {{ lang }}
          <button type="button" @click="removeLanguage(lang)" class="text-blue-500 hover:text-blue-800">×</button>
        </span>
        <span
          v-for="fw in selectedFrameworks"
          :key="'f-' + fw"
          class="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
        >
          {{ fw }}
          <button type="button" @click="removeFramework(fw)" class="text-blue-500 hover:text-blue-800">×</button>
        </span>
      </div>
    </div>

    <!-- Grid de projetos -->
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

        <button
          @click="openModal(project)"
          class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Ver detalhes
        </button>
      </div>
    </div>

    <!-- MODAL -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      @click="closeModal"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-xl w-full mx-4 p-6 relative"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <h3 class="text-2xl font-bold mb-4">
          {{ activeProject?.title }}
        </h3>

        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ activeProject?.fullDescription }}
        </p>

        <div class="flex gap-4">
          <a
            :href="activeProject?.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-700 hover:cursor-pointer"
          >
            Ver no GitHub
          </a>

          <a
            v-if="activeProject?.linkSite"
            :href="activeProject.linkSite"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-700 hover:cursor-pointer"
          >
            Ver site
          </a>
        </div>
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
      activeProject: null,
      isModalOpen: false,
      selectedLanguages: [],
      selectedFrameworks: [],
      isOpenLanguages: false,
      isOpenFrameworks: false,
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
    frameworks() {
      const fws = new Set();
      this.projects.forEach((p) => {
        if (p.framework) fws.add(p.framework);
      });
      return Array.from(fws).sort();
    },
    filteredProjects() {
      return this.projects.filter((p) => {
        const languageMatch =
          !this.selectedLanguages.length || this.selectedLanguages.includes(p.language);

        let frameworkMatch = false;
        if (!this.selectedFrameworks.length) {
          frameworkMatch = true;
        } else if (p.framework) {
          frameworkMatch = this.selectedFrameworks.includes(p.framework);
        } else {
          frameworkMatch = this.selectedLanguages.includes('Python');
        }

        return languageMatch && frameworkMatch;
      });
    },
  },
  methods: {
    openModal(project) {
      this.activeProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.activeProject = null;
    },
    toggleDropdown(type) {
      if (type === 'languages') {
        this.isOpenLanguages = !this.isOpenLanguages;
        this.isOpenFrameworks = false;
      } else {
        this.isOpenFrameworks = !this.isOpenFrameworks;
        this.isOpenLanguages = false;
      }
    },
    toggleLanguage(lang) {
      const index = this.selectedLanguages.indexOf(lang);
      if (index > -1) this.selectedLanguages.splice(index, 1);
      else this.selectedLanguages.push(lang);
    },
    toggleFramework(fw) {
      const index = this.selectedFrameworks.indexOf(fw);
      if (index > -1) this.selectedFrameworks.splice(index, 1);
      else this.selectedFrameworks.push(fw);
    },
    removeLanguage(lang) {
      this.selectedLanguages = this.selectedLanguages.filter((item) => item !== lang);
    },
    removeFramework(fw) {
      this.selectedFrameworks = this.selectedFrameworks.filter((item) => item !== fw);
    },
    clearAllFilters() {
      this.selectedLanguages = [];
      this.selectedFrameworks = [];
      this.isOpenLanguages = false;
      this.isOpenFrameworks = false;
    },
    handleClickOutside(event) {
      const langEl = this.$refs.langFilter;
      const fwEl = this.$refs.frameworkFilter;
      if (langEl && !langEl.contains(event.target)) {
        this.isOpenLanguages = false;
      }
      if (fwEl && !fwEl.contains(event.target)) {
        this.isOpenFrameworks = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
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