<template>
  <section id="contact" class="p-8 bg-gray-100 items-start text-left">
    <h2 class="text-3xl font-bold mb-4">Contato</h2>
    <p class="my-12">Entre em contato comigo:</p>
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4 max-w-md items-start">
      <input
          type="text"
          v-model="form.name"
          placeholder="Seu Nome"
          class="p-2 border rounded w-full"
          required
      />
      <input
          type="email"
          v-model="form.email"
          placeholder="Seu Email"
          class="p-2 border rounded w-full"
          required
      />
      <input
          type="tel"
          v-model="form.phone"
          placeholder="Seu Telefone/WhatsApp (opcional)"
          class="p-2 border rounded w-full"
      />
      <textarea
          v-model="form.message"
          placeholder="Sua Mensagem"
          class="p-2 border rounded w-full"
          required
      ></textarea>
      <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-16 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>

    <!-- Botão Voltar -->
    <button
        @click="$router.back()"
        class="mt-6 bg-green-200 text-gray-800 py-2 px-4 rounded hover:bg-green-300 self-start"
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

      alert('Formulário enviado com sucesso!');
    },
  },
};
</script>
