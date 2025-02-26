<template>
  <button 
    @click="toggleDark()" 
    class="theme-button bg-blue-400 dark:bg-green-300 text-white dark:text-gray-800 py-2 px-4 rounded dark:hover:bg-green-700 hover:bg-blue-700 whitespace-nowrap"
    :style="{ bottom: adjustedBottom + 'px' }"
  >
    Modo Escuro
  </button>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  name: "ThemeButton",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { toggleDark };
  },
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
      if (footer && window.innerWidth < 1024) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerTop < windowHeight - 30) { // Se o footer está visível
          this.adjustedBottom = windowHeight - footerTop + 50;
        } else {
          this.adjustedBottom = 100; // Posição padrão
        }
      } else {
        this.adjustedBottom = 80;
      }
    }
  }
};
</script>

<style scoped>
.theme-button {
  position: fixed;
  right: 20px;
  z-index: 1000;
}
</style>
