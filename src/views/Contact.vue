<template>
  <section id="contact" class="p-8 m-4 bg-gray-100 items-start text-left">
    <h2 class="text-3xl text-center font-bold mb-4">Contato</h2>
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4 max-w-md">
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
          @input="validatePhoneInput"
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
          class="bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
      <label v-if="successMessage" class="flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm text-sm mt-2"> {{ successMessage }} </label>
      <label v-if="deniedMessage" class="flex items-center gap-2 px-4 py-2 bg-red-200 text-red-700 rounded-full shadow-sm text-sm mt-2"> {{ deniedMessage }} </label>
      <label v-if="errors.phone" class="text-sm text-red-500 mt-2"> {{ errors.phone }} </label>
    </form>

    <button
        @click="$router.back()"
        class="mt-6 bg-green-200 text-gray-800 py-2 px-8 rounded hover:bg-green-300 self-start"
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
      successMessage: '',
      deniedMessage: '',
      errors: {
        phone: null,
      },
    };
  },
  methods: {
    async handleSubmit() {
      const {name, email, phone, message} = this.form;

      this.errors.phone = null;
      this.successMessage = '';
      this.deniedMessage = '';

      if (phone.length > 0 && phone.length < 10) {
        this.errors.phone = "O telefone deve ter 10 ou 11 dígitos.";
        this.deniedMessage = "Por favor, corrija os erros antes de enviar o formulário.";
        return;
      }

      try {
        const requestBody = { name, email, phone: phone || "Não informado", message };

        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          this.successMessage = 'Sua mensagem foi enviada com sucesso!';
          console.log('E-mail enviado:', {name, email, phone, message});

          this.form = {
            name: '',
            email: '',
            phone: '',
            message: '',
          };

          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        } else {
          this.deniedMessage = 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.';
        }
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        this.deniedMessage = 'Ocorreu um erro inesperado. Por favor, tente novamente.';
      }
    },

    validatePhoneInput(event) {
      const input = event.target.value;

      const numericInput = input.replace(/\D/g, '');

      this.form.phone = numericInput.slice(0, 11);
    },
  }
}
</script>
