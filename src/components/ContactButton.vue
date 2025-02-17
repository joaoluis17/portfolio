<template>
    <router-link to="/contact" class="contact-button">
      <button class=" bg-blue-400 dark:bg-green-300 text-white dark:text-gray-800 py-2 px-4 rounded hover:bg-blue-700 whitespace-nowrap">
        Entre em Contato
      </button>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'ContactButton'
  }
  </script>
  
  <style scoped>
  .contact-button {
    position: fixed;
    left: 20px;
    bottom: 40px;
    z-index: 1000;
  }
  </style>
  