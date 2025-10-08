<template>
  <section id="projects" class="w-full px-4 items-start text-left">
      <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Projetos</h2>
      
      <div class="relative">
        <!-- Botão Esquerda - SVG estilizado -->
        <button
          @click="scrollLeft"
          aria-label="Scroll left"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow hover:scale-105 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Lista de Projetos com Scroll (barra escondida) -->
        <div ref="scrollContainer" class="flex overflow-x-auto scroll-smooth space-x-4 py-4 hide-scrollbar">
          <div
              v-for="(project, index) in projects"
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

        <!-- Botão Direita - SVG estilizado -->
        <button
          @click="scrollRight"
          aria-label="Scroll right"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow hover:scale-105 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
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
        fullDescription: 'Essa landing page, criada em Vue JS, com layout totalmente responsivo e com diversas telas integradas no arquivo principal, mostrando a utilização de componentização e outras boas práticas para um código limpo. O site está hospedado no Netlify, e o código-fonte está disponível no GitHub. O site foi criado para divulgar meus trabalhos na área da música, com um design moderno e funcional.',
        link: 'https://github.com/joaoluis17/music-portfolio',
        linkSite: 'https://john-prado.netlify.app/',
      },
      {
        title: 'Conversor Universal',
        description: 'Esse é um conversor universal que saiu de um projeto anterior, em parceria com o João Fernando (OCorvu).',
        fullDescription: 'Criamos o primeiro projeto com o intuito de estudarmos o Front-End. Nele, criamos dois conversores: Conversor de Texto com as seguintes opções: Maiúsculo, Minúsculo, Capitalizar, MaIuScUlO, mInUsCuLo, Inverso, Reverso e Copiar texto. E um conversor de medidas, com as opções: km, hm, dam, m, dm, cm, mm. Eu segui com esse projeto, criando outro repositório do zero, porém, usando este como base. Além desses dois conversores já citados, criei também um conversor de moedas, onde simultaneamente, você pode converter as seguintes moedas: Real "R$"; Peso Argentino "ARS"; Dólar EUA "$"; Dólar Canadense "CAD"; Euro "€"; Libra Esterlina "£"; Franco Suíço "CHF"; Rublo Russo "RUB"; Iene "JP¥"; Renminbi (China) "元/¥"; Won Sul-Coreano "₩" e; Dólar Australiano "AU$" . Esse é um projeto com HTML5, Tailwind CSS e Vanilla JavaScript.',
        link: 'https://github.com/ocorvu/conversor.git',
        linkSite: 'https://conversor-universal.netlify.app/',
      },
      {
        title: 'Landing Page - Wicomm',
        description: 'Landing Page de uma loja fictícia criada em um projeto de teste técnico.',
        fullDescription: 'Projeto desenvolvido como teste técnico para a empresa Wicomm, utilizando ReactJS e Vite, com foco em componentização, pixel perfect e boas práticas de SEO. O layout segue fielmente o Figma fornecido, com ajustes responsivos, porém priorizando a versão desktop. O projeto está disponível em produção no Vercel.',
        link: 'https://github.com/joaoluis17/wicomm-teste',
        linkSite: 'https://wicomm-teste-bay.vercel.app/',
      },
      {
        title: 'Calculadora de IMC',
        description: 'Calculadora de IMC simples de usar.',
        fullDescription: 'Calculadora de IMC feita com HTML/CSS e Python. Um projeto simples e fácil de usar. Para por em prática meus conhecimentos em python',
        link: 'https://github.com/joaoluis17/calculator.git',
      },
      {
        title: 'Helpick',
        description: 'Comunidade online para músicos.',
        fullDescription: 'A ideia desse site é uma comunidade musical, onde os usuários poderão tirar dúvidas e conhecer outros músicos para melhorar seu networking e criar amizades. Este é meu primeiro projeto Full-Stack em Laravel, Tailwind CSS e MySQL, além de usar AlpineJS e JavaScript para a lógica de algumas mini-funções do site. Tive auxílio do João Fernando (ocorvu) nesse projeto, onde ele me ajudou a criar alguns componentes do fórum. Nele temos um site com alguns painéis (Fórum, Blog e Produtos), além de ter cadastro de usuários e outras funções. Criei também, as landing pages responsivas usando JavaScript e Tailwind CSS.',
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
