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
                  @click.stop="showProjectDetails(index)" 
                  class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                  Ver Detalhes
              </button>
          </div>
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
export default {
name: 'Projects',
data() {
  return {
    selectedProject: null,
    projects: [
      {
        title: 'Site Pessoal',
        description: 'Nesse projeto, criei um site pessoal para divulgar meus trabalhos na área da música',
        fullDescription: 'Essa landing page, criada em Vue JS, com layout totalmente responsivo e com diversas telas integradas no arquivo principal.',
        link: 'https://github.com/joaoluis17/music-portfolio',
        linkSite: 'https://john-prado.netlify.app/',
      },
      {
        title: 'Conversor Universal',
        description: 'Esse é um projeto de conversor universal que saiu de outro projeto anterior, em parceria com o João Fernando (OCorvu).',
        fullDescription: 'Criamos o primeiro projeto com o intuito de estudarmos o Front-End. Nele, criamos dois conversores: Conversor de Texto com as seguintes opções: Maiúsculo, Minúsculo, Capitalizar, MaIuScUlO, mInUsCuLo, Inverso, Reverso e Copiar texto. E um conversor de medidas, com as opções: km, hm, dam, m, dm, cm, mm. Eu segui com esse projeto, criando outro repositório do zero mas, usando esse como base. Além desses dois conversores já citados, criei também um conversor de Moedas, onde simultaneamente, você pode converter as seguintes moedas: Real "R$"; Peso Argentino "ARS"; Dólar EUA "$"; Dólar Canadense "CAD"; Euro "€"; Libra Esterlina "£"; Franco Suíço "CHF"; Rublo Russo "RUB"; Iene "JP¥"; Renminbi (China) "元/¥"; Won Sul-Coreano "₩" e; Dólar Australiano "AU$" . Esse é um projeto com HTML5, Tailwind CSS e Vanilla JavaScript.',
        link: 'https://github.com/ocorvu/conversor.git',
        linkSite: 'https://conversor-universal.netlify.app/',
      },
      {
        title: 'Helpick',
        description: 'Comunidade online para músicos',
        fullDescription: 'A ideia desse site é uma comunidade musical, onde os usuários poderão tirar dúvidas e conhecer outros músicos para melhorar seu networking e criar amizades. Este é meu primeiro projeto Full-Stack em Laravel, Tailwind CSS e MySQL, além de usar Alpine e JavaScript para a lógica de algumas mini-funções do site. Tive auxílio do João Fernando (ocorvu) nesse projeto, onde ele me ajudou a criar alguns componentes do fórum. Nele temos um site com alguns painéis (Fórum, Blog e Produtos), além de ter cadastro de usuários e outras funções. Criei também, as landing pages responsivas usando JavaScript e Tailwind CSS.',
        link: 'https://github.com/joaoluis17/helpick',
      },
    ],
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
