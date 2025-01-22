<template>
  <section id="projects" class="p-8 bg-white">
    <h2 class="text-3xl font-bold mb-4">Projetos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id" class="p-4 border rounded shadow">
        <h3 class="text-xl font-semibold">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" class="text-blue-500 hover:underline" target="_blank">Ver Projeto</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { id: 1, name: "Projeto 1", description: "Descrição do projeto 1", link: "#" },
  { id: 2, name: "Projeto 2", description: "Descrição do projeto 2", link: "#" },
];
</script>
