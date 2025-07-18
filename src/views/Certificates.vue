<template>
  <section id="certificates" class="w-full px-4 pb-20 items-start text-left">
      <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Cursos e Certificados</h2>
      
      <div class="relative">
        <!-- Botão Esquerda -->
        <button 
          @click="scrollLeft"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        >
          ◀
        </button>

        <!-- Lista de Certificados com Scroll -->
        <div ref="scrollContainer" class="flex overflow-x-auto scroll-smooth space-x-4 py-4 no-scrollbar">
          <div
            v-for="(certificate, index) in certificates"
            :key="index"
            class="certificate-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-64 shrink-0"
          >
            <!-- Conteúdo do card -->
            <h3 class="text-xl text-gray-600 font-bold mb-2">{{ certificate.title }}</h3>
            <p class="text-gray-600">{{ certificate.description }}</p>
            <button 
              @click.stop="showcertificateDetails(index)" 
              class="mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Ver Detalhes
            </button>
          </div>
        </div>

        <!-- Botão Direita -->
        <button 
          @click="scrollRight"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        >
          ▶
        </button>
      </div>


      <div 
          v-if="selectedcertificate !== null" 
          ref="certificateDetails"
          class="certificate-details mt-8 p-6 bg-gray-100 rounded shadow-lg"
          @click="closecertificateDetails"
      >
          <h3 class="text-2xl text-gray-600 font-bold mb-4">
              {{ certificates[selectedcertificate].title }}
          </h3>
          <p class="text-lg text-gray-600">
              {{ certificates[selectedcertificate].fullDescription }}
          </p>
          <div class="mt-4">
            <a 
              :href="certificates[selectedcertificate].link"
              target="_blank"
              class="text-blue-400 hover:text-blue-700 mr-4"
            >
                Ver Certificado
            </a>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'certificates',
data() {
  return {
    selectedcertificate: null,
    certificates: [
      {
        title: 'Agile Explorer - IBM',
        description: 'Curso com certificação de 8 horas em Desenvolvimento Ágil pela IBM.',
        fullDescription: 'Nesse plano de aprendizagem, aprendi do básico ao avançado sobre desenvolvimento ágil, com a metodologia da IBM.',
        certificado: 'https://www.credly.com/badges/135198a1-a6cb-4e1c-b758-0d0478d2da1a/linked_in_profile',
      },
      {
        title: 'Lean Manufacturing - Nível 1',
        description: 'Curso com certificação de 2 horas em Lean Manufacturing pela RL&Associados.',
        fullDescription: 'Nesse curso introdutório de nível 1, aprendi a base do "Lean Manufacturing", onde foi explicado temas como: Poka Yoke, Andon, Gerenciamento de Mudança, entre outros.',
        certificado: 'https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:e6339682-0579-4e5d-8abb-2f00b81f207b',
      },
      {
        title: 'Formação White Belt Six Sigma',
        description: 'Curso com certificação de 2 horas em Lean White Belt Six Sigma pela RL&Associados.',
        fullDescription: 'Certificação White Belt, onde aprendi a base do Six Sigma. Nele, aprendi sobre os níveis e funções de cada "Belt", além de ferramentas e metodologias como: Dados - Global e Dentro, Desvio Padrão, Análise prática de um processo, Normalidade dos dados, entre outros.',
        certificado: 'https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:71e8cd41-c921-4dde-ba61-0c1e65bb5eee',
      },
      {
        title: 'Liderança e Gestão De Equipes',
        description: 'Curso com certificação de 30 horas em Resolução de Problemas pelo ENAP.',
        fullDescription: 'Este é um dos cursos do Eixo "Resolvendo Problemas" da escola virtual ENAP. Nele, aprendi técnicas de gestão de equipes onde, com elas, posso inspirar o meu time a sempre tentar dar o melhor para trazer a satisfação do cliente.',
        link: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:576fd501-64ed-47a9-a5bc-fdb849e419a4',
      },
      {
        title: 'Desenvolvendo Times de Alta Performance',
        description: 'Curso com certificação de 30 horas em Resolução de Problemas pelo ENAP.',
        fullDescription: 'Este é o segundo curso do Eixo "Resolvendo Problemas" que tive a oportunidade de finalizar. Nesse curso, pude aprender técnicas e ferramentas de performance para que o time consiga ter melhores resultados de forma mais efetiva. Tive introdução ao método OKR, além de outras metodologias e ferramentas como o Kanban e o Canva.',
        link: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5751b4ff-730c-43d2-8d11-64e361d76bc9',
      },
      {
        title: 'Organização de Equipes Ágeis: os papéis existentes em uma equipe',
        description: 'Curso com certificação de 6 horas em Organização de Equipes pela Alura',
        fullDescription: 'Nesse curso, fui ensinado sobre a organização de equipes com métodos ágeis, entendendo os papéis e funções existentes em uma equipe.',
        link: 'https://cursos.alura.com.br/certificate/ce5bb624-df2f-4b12-bc12-60adebd00a0b?lang',
      },
      {
        title: 'Imersão Dev 9ª Edição',
        description: 'Workshop online com certificação de 4 horas em Desenvolvimento Web pela Alura',
        fullDescription: 'Imersão Dev com foco em Desenvolvimento Web usando a linguagem JavaScript. Nesse workshop online, foi ensinado o básico da lógica de programação, além de explicar um pouco sobre cada função da área Dev.',
        link: 'https://cursos.alura.com.br/immersion/certificate/e7db9c3d-2271-4dd2-8d22-60390338c577?lang',
      },
    ],
  };
},
methods: {
  showcertificateDetails(index) {
    this.selectedcertificate = index;
  },
  closecertificateDetails() {
    this.selectedcertificate = null;
  },
  handleClickOutside(event) {
    if (this.selectedcertificate !== null && this.$refs.certificateDetails && !this.$refs.certificateDetails.contains(event.target)) {
      this.closecertificateDetails();
    }
  },
  scrollLeft() {
    this.$refs.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  },
  scrollRight() {
    this.$refs.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
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
