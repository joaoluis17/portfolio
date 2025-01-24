<template>
  <section id="contact" class="p-8 bg-gray-100">
    <h2 class="text-3xl font-bold mb-4">Contato</h2>
    <p>Entre em contato comigo:</p>
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4 max-w-md">
      <input
          type="text"
          v-model="form.name"
          placeholder="Seu Nome"
          class="p-2 border rounded"
          required
      />
      <input
          type="email"
          v-model="form.email"
          placeholder="Seu Email"
          class="p-2 border rounded"
          required
      />
      <input
          type="tel"
          v-model="form.phone"
          placeholder="Seu Telefone/WhatsApp (opcional)"
          class="p-2 border rounded"
      />
      <textarea
          v-model="form.message"
          placeholder="Sua Mensagem"
          class="p-2 border rounded"
          required
      ></textarea>
      <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>

    <!-- Botão Voltar -->
    <button
        @click="$router.back()"
        class="mt-6 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 self-start text-left"
    >
      Voltar
    </button>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      const { name, email, phone, message } = this.form;
      console.log('Dados enviados:', { name, email, phone, message });

      // Lógica para processar os dados
      alert('Formulário enviado com sucesso!');
    },
  },
};
</script>

<style scoped>
/* Estilo adicional, se necessário */
</style>
