<template>
  <section class="w-full px-4 pb-20 relative">
    <!-- Botão voltar no canto superior esquerdo -->
    <div class="absolute left-4 top-4">
      <router-link to="/" class=" bg-green-200 text-gray-800 py-2 px-8 rounded hover:bg-green-300 self-start">← Voltar</router-link>
    </div>

    <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Todos os Projetos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="(project, i) in projects" :key="i" class="bg-gray-100 p-6 rounded shadow">
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
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
    };
  },
};
</script>

<style scoped>
.project-card {
  min-height: 160px;
}
</style>
