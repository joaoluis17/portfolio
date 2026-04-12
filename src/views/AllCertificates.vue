<template>
  <section class="w-full px-4 pb-20 relative">
    <!-- Botão voltar no canto superior esquerdo -->
    <div class="flex items-center gap-4 mb-8 mt-4">
      <router-link
        to="/"
        class="bg-green-200 text-gray-800 py-2 px-4 rounded hover:bg-green-300 text-sm shrink-0"
      >
        ← Voltar
      </router-link>
      <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-200 font-bold">
        Todas as Certificações
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="(c, i) in certificates" :key="i" class="bg-gray-100 p-6 rounded shadow">
        <h3 class="text-xl font-bold mb-2">{{ c.title }}</h3>
        <p class="text-gray-600 mb-4">{{ c.description }}</p>
        <p class="text-sm text-gray-500 mb-4">{{ c.fullDescription }}</p>
        <a :href="c.link" target="_blank" class="text-blue-400 hover:text-blue-700 hover:cursor-pointer mr-4">Ver Certificado</a>
      </div>
    </div>
  </section>
</template>

<script>
import certificatesData from '@/data/certificates';

export default {
  name: 'AllCertificates',
  data() {
    return {
      certificates: certificatesData
    };
  },
};
</script>

<style scoped>
.certificate-card {
  min-height: 160px;
}
</style>
