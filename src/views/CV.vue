<template>
  <div class="w-full h-screen flex flex-col items-center bg-gray-100">

    <div class="w-full flex justify-between items-center px-6 py-3 bg-white shadow">
      <h1 class="text-xl font-bold">Currículo - João Luis Aguiar Rodrigues do Prado</h1>

      <a 
        href="/public/Joao_Luis_Aguiar_Rodrigues_do_Prado_CV.pdf"
        download="Joao_Luis_Aguiar_Rodrigues_do_Prado_CV.pdf"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Baixar PDF
      </a>
    </div>

    <iframe
      src="/public/Joao_Luis_Aguiar_Rodrigues_do_Prado_CV.pdf#zoom=70"
      class="w-full h-full"
    ></iframe>

  </div>
</template>

<script>
export default {
  name: "CV"
}
</script>