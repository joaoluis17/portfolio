<template>
  <section id="contact" class="p-8 bg-gray-100">
    <h2 class="text-3xl font-bold mb-4">Contato</h2>
    <p>Entre em contato comigo:</p>
    <form class="flex flex-col space-y-4 max-w-md">
      <input type="text" placeholder="Seu Nome" class="p-2 border rounded" />
      <input type="email" placeholder="Seu Email" class="p-2 border rounded" />
      <textarea placeholder="Sua Mensagem" class="p-2 border rounded"></textarea>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Enviar</button>
    </form>

    <footer class="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {{ new Date().getFullYear() }} João Luis. Todos os direitos reservados.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
// Eventualmente, conecte esse formulário a um serviço como EmailJS ou uma API de backend.
</script>
