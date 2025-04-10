<template>
    <button 
      v-if="isVisible"
      @click="scrollToTop" 
      class="fixed bottom-4 right-4 p-3 bg-green-300 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
    >
      Topo ↑
    </button>
  </template>
  
  <script>
  export default {
    name: "BackToUpButton",
    data() {
      return {
        isVisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.checkScrollPosition);
    },
    destroyed() {
      window.removeEventListener('scroll', this.checkScrollPosition);
    },
    methods: {
      checkScrollPosition() {
        if (window.scrollY > 300) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: opacity 0.3s ease;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>
  