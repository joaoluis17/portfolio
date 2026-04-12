<template>
  <section id="certificates" class="w-full px-4 pb-20 items-start text-left">
    <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Cursos e Certificados</h2>

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
      <!-- Lista de Certificados com Scroll (apenas 4 inteiros) -->
      <div class="overflow-hidden">
        <div ref="scrollContainer" class="flex overflow-x-auto scroll-smooth space-x-4 py-4 hide-scrollbar">
          <div
            v-for="(certificate, index) in certificates.slice(0,4)"
            :key="index"
            class="certificate-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-56 flex-shrink-0"
          >
            <h3 class="text-xl text-gray-600 font-bold mb-2">{{ certificate.title }}</h3>
            <p class="text-gray-600">{{ certificate.description }}</p>
            <div class="mt-4">
              <a
                :href="certificate.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-700 hover:cursor-pointer"
              >
                Ver Certificado
              </a>
            </div>
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
    <!-- Botão ver todas posicionado abaixo, alinhado à direita (não sobrepõe os cards) -->
    <div class="mt-2 flex justify-end">
      <router-link to="/certificates" class="bg-blue-400 text-white py-2 px-4 mr-12 rounded hover:bg-blue-700">Ver todas as certificações</router-link>
    </div>

    <!-- Detalhes do certificado selecionado -->
    <div
      v-if="selectedcertificate !== null"
      ref="certificateDetails"
      class="certificate-details mt-8 p-6 bg-gray-100 rounded shadow-lg"
      @click="closecertificateDetails"
    >
      <h3 class="text-2xl text-gray-600 font-bold mb-4">{{ certificates[selectedcertificate].title }}</h3>
      <p class="text-lg text-gray-600">{{ certificates[selectedcertificate].fullDescription }}</p>
      <div class="mt-4">
        <a
          :href="certificates[selectedcertificate].link"
          target="_blank"
          @click.stop
          class="text-blue-400 hover:text-blue-700 hover:cursor-pointer mr-4"
        >
          Ver Certificado
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import certificatesData from '@/data/certificates';

export default {
  name: 'Certificates',
  data() {
    return {
      selectedcertificate: null,
      certificates: certificatesData,
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    },
    closecertificateDetails() {
      this.selectedcertificate = null;
    },
  },
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