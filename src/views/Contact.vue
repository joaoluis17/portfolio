<template>
  <section id="contact" class="min-h-screen py-16 px-4 flex items-start justify-center pb-16">
    <div class="w-full max-w-5xl bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-10">

      <!-- Header -->
      <header class="mb-10 text-center">
        <h2 class="text-4xl font-bold text-gray-700">Informações de Contato</h2>
        <p class="text-lg text-gray-500 mt-2">
          Vamos conversar! Escolha o canal que preferir.
        </p>
      </header>

      <!-- Infos -->
      <div class="space-y-6 py-6 mb-8">

        <!-- Email -->
        <div class="flex items-center gap-4 cursor-pointer">
          <a href="mailto:jluispprado@hotmail.com">
            <div class="p-3 rounded-xl shadow-sm">
              <img src="../assets/email-icon.svg" alt="Email" class="w-5 h-5 hover:w-7 hover:h-7 hover:scale-2200 transition-all duration-400">
            </div>
            <p class="text-base text-gray-600 hover:underline">
              Email:
              <a class="text-gray-700 font-medium">
                jluispprado@hotmail.com
              </a>
            </p>
          </a>
        </div>

        <!-- WhatsApp -->
        <div class="flex items-center gap-4 cursor-pointer">
          <a href="https://wa.me/5511998962261" target="_blank" class="flex items-center gap-4">
            <div class="p-3 rounded-xl shadow-sm">
              <img src="../assets/whatsapp-icon.svg" alt="WhatsApp" class="w-5 h-5 hover:w-7 hover:h-7 hover:scale-2200 transition-all duration-400">
            </div>
            <p class="text-base text-gray-600 hover:underline">
              Telefone / WhatsApp
            </p>
          </a>
        </div>

        <!-- Localização -->
        <div class="flex items-center gap-4">
          <div class="p-3 rounded-xl shadow-sm">
            <img src="../assets/location-icon.svg" alt="Localização" class="w-5 h-5">
          </div>
          <p class="text-base text-gray-600">
            Localização:
            <span class="font-semibold text-gray-800 ml-1">
              São Paulo, Brazil
            </span>
          </p>
        </div>

        <!-- Disponibilidade -->
        <div class="flex items-center gap-4">
          <div class="p-3 rounded-xl shadow-sm">
            <img src="../assets/calendar-icon.svg" alt="Calendário" class="w-5 h-5">
          </div>
          <p class="text-base font-semibold text-gray-800">
            Disponível para novos projetos
          </p>
        </div>

      </div>

      <!-- Social -->
      <div class="text-center">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">
          Encontre-me online
        </h3>

        <div class="flex justify-center gap-6">

          <a href="https://github.com/joaoluis17" target="_blank" rel="noopener noreferrer">
            <div class="rounded-xl shadow hover:scale-110 transition-all duration-200">
              <img src="../assets/github-logo.svg" class="w-8 h-8" alt="GitHub Logo"/>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/joao-luis-prado/" target="_blank" rel="noopener noreferrer">
            <div class="rounded-xl shadow hover:scale-110 transition-all duration-200">
              <img src="../assets/linkedin-icon.svg" class="w-8 h-8" alt="LinkedIn Logo"/>
            </div>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>