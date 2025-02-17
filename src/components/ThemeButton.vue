<template>
      <button @click="toggleDark()" class="theme-button bg-blue-400 dark:bg-green-300 text-white dark:text-gray-800 py-2 px-4 rounded hover:bg-blue-700 whitespace-nowrap">
        Modo Escuro
      </button>
  </template>
  
  <script>
  import { useDark, useToggle } from '@vueuse/core'

  export default {
    name: 'ThemeButton',
    setup () {
        const isDark = useDark()
        const toggleDark = useToggle(isDark)

        return { toggleDark } 
    }
}
  </script>
  
  <style scoped>
  .theme-button {
    position: fixed;
    right: 20px;
    bottom: 40px;
    z-index: 1000;
  }
  </style>
  