<template>
  <router-link to="/contact" :style="{ bottom: adjustedBottom + 'px' }" class="fixed left-5 z-[1000]">
    <button class="bg-blue-400 dark:bg-green-300 text-white dark:text-gray-800 py-2 px-4 rounded dark:hover:bg-green-700 hover:bg-blue-700 whitespace-nowrap">
      Entre em Contato
    </button>
  </router-link>
</template>

<script>
export default {
  name: "ContactButton",
  data() {
    return {
      adjustedBottom: 80, // Posição inicial
    };
  },
  mounted() {
    this.updateButtonPosition();
    window.addEventListener("resize", this.updateButtonPosition);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateButtonPosition);
  },
  methods: {
    updateButtonPosition() {
      const footer = document.querySelector("footer");
      if (footer && window.innerWidth < 1024) { // Apenas no mobile
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop < windowHeight - 30) { // Se o footer está visível
          this.adjustedBottom = windowHeight - footerTop + 50;
        } else {
          this.adjustedBottom = 100; // Posição padrão
        }
      } else {
        this.adjustedBottom = 80; // Reset no desktop
      }
    }
  }
};
</script>
