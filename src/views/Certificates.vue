<template>
  <section id="certificates" class="w-full px-4 pb-20 items-start text-left">
    <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold my-12">Cursos e Certificados</h2>

    <div class="relative">
      <!-- Lista de Certificados com Scroll (apenas 4 inteiros) -->
      <div class="overflow-hidden">
        <div ref="scrollContainer" class="flex space-x-4 py-4">
          <div
            v-for="(certificate, index) in certificates.slice(0,4)"
            :key="index"
            class="certificate-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-56 flex-shrink-0"
          >
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
      </div>

      <!-- Botão ver todas posicionado abaixo, alinhado à direita (não sobrepõe os cards) -->
      <div class="mt-2 flex justify-end">
        <router-link to="/certificates" class="bg-blue-400 text-white py-2 px-4 mr-12 rounded hover:bg-blue-700">Ver todas as certificações</router-link>
      </div>
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
name: 'certificates',
data() {
  return {
    selectedcertificate: null,
    certificates: certificatesData,
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
