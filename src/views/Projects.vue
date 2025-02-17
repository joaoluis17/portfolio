<template>
    <section id="projects" class="w-full px-20 items-start text-left">
        <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Projetos</h2>
        
        <div class="flex overflow-x-auto space-x-4 py-4">
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-64"
        >
            <h3 class="text-xl text-gray-600 font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <button 
            @click="showProjectDetails(index)" 
            class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
            Ver Detalhes
            </button>
        </div>
        </div>

        <div v-if="selectedProject !== null" class="project-details mt-8">
            <h3 class="text-2xl text-gray-600 dark:text-gray-200 font-bold mb-4">{{ projects[selectedProject].title }}</h3>
            <p class="text-lg text-gray-600 dark:text-gray-200">{{ projects[selectedProject].fullDescription }}</p>
        <a 
            :href="projects[selectedProject].link"
            target="_blank"
            class="text-blue-400 hover:text-blue-700"
            >
            Ver no GitHub ou Site
        </a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          title: 'Conversor',
          description: 'Esse é um projeto de conversor universal criado junto com o João Fernando (ocorvu)',
          fullDescription: 'Criamos esse projeto com o intuito de estudarmos o Front-End. Nele, temos um conversor de texto com as seguintes opções: Maiúsculo, Minúsculo, Capitalizar, MaIuScUlO, mInUsCuLo, Inverso, Reverso e Copiar texto. Além de um conversor de medidas, com as opções: km, hm, dam, m, dm, cm, mm',
          link: 'https://github.com/ocorvu/conversor.git',
        },
        {
          title: 'Site Pessoal',
          description: 'Nesse projeto, criei um site pessoal para divulgar meus trabalhos na área da música',
          fullDescription: 'Essa landing page, criada em Vue JS, com layout totalmente responsivo e com diversas telas integradas no arquivo principal.',
          link: 'https://github.com/joaoluis17/music-portfolio',
        },
      ],
    };
  },
  methods: {
    showProjectDetails(index) {
      this.selectedProject = index;
    },
  },
};
</script>