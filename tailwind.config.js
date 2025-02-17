/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Inclua os arquivos relevantes
  ],
  theme: {
    extend: {
        colors: {
            'skin-color': '#DFB09E', //cor do bg dos botões
            'brown-eyes': '#77493F',
            'off-white': '#EDE3DB',
            'darkslateblue': '#483D8BFF',
            'dark-blue': '#2D3E51',
            'dark-hair': '#464243',
            'gray-300': 'rgba(209, 213, 219, 1)',
            'blue-500': 'rgba(96, 165, 250, 0.2)',
        },
        fontFamily: {
            'roboto-flex': ['"Roboto Flex"', 'sans-serif'], // Adiciona a fonte Roboto Flex
            'tapestry': ['Tapestry', 'cursive'], // Adicionando a fonte 'Tapestry'
        },
    },
},
  plugins: [],
};
