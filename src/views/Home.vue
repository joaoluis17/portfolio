<template>
  <section class="w-full inline-flex px-12">
    <div id="home" class="p-8 bg-white flex flex-col items-start">
      <div class="avatar-background rounded-full overflow-hidden w-32 h-32 mb-4">
        <img src="../assets/profile-photo.jpg" height="1599" width="899" alt="Avatar-Photo"/>
      </div>
      <h1 className="text-4xl text-gray-700 font-bold mb-2">João Luis Prado</h1>
      <p className="text-lg text-gray-600">Desenvolvedor web Front-End & Gestor de Projetos</p>
      <p className="text-sm text-gray-400">(Vue JS | Laravel | Scrum | Kanban) - Brasil</p>

      <div class="flex flex-wrap gap-4 mt-4">
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/front-icon.svg" class="w-5 h-5">
          <span>Front-End Developer</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/html-icon.svg" class="w-5 h-5">
          <span>HTML5</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/css-icon.svg" class="w-5 h-5">
          <span>CSS3</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/tailwind-icon.svg" class="w-5 h-5">
          <span>Tailwind CSS3</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/js-icon.svg" class="w-5 h-5">
          <span>JavaScript</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/node-icon.svg" class="w-5 h-5">
          <span>Node JS</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/vue-icon.svg" class="w-5 h-5">
          <span>Vue JS</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/php-icon.svg" class="w-5 h-5">
          <span>PHP</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/laravel-icon.svg" class="w-5 h-5">
          <span>Laravel PHP</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/filament-icon.svg" class="w-5 h-5">
          <span>Filament PHP</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/wordpress-icon.svg" class="w-5 h-5">
          <span>WordPress</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm">
          <img src="@/assets/mysql-icon.svg" class="w-5 h-5">
          <span>MySQL</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/scrum-master-icon.svg" class="w-5 h-5">
          <span>Agile Master</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/scrum-icon.svg" class="w-5 h-5">
          <span>Scrum</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/kanban-icon.svg" class="w-5 h-5">
          <span>Kanban</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/lean-icon.svg" class="w-5 h-5">
          <span>Lean</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/gestao-icon.svg" class="w-5 h-5">
          <span>Gestão</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/github-icon.svg" class="w-5 h-5">
          <span>GitHub</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/miro-icon.svg" class="w-5 h-5">
          <span>Miro</span>
        </label>
        <label class="badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm">
          <img src="@/assets/excel-icon.svg" class="w-5 h-5">
          <span>Excel</span>
        </label>
      </div>
    </div>
    <router-link to="/contact" class="mt-12">
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 whitespace-nowrap">
        Entre em Contato
      </button>
    </router-link>
  </section>

  <section id="about" class="w-full px-20 items-start text-left">
    <h2 class="text-3xl text-gray-700 font-bold my-12">Sobre Mim</h2>
    <p class="text-lg text-gray-700">
      Sou Desenvolvedor Front-End especializado em criar interfaces intuitivas e funcionais, com experiência em frameworks como Vue JS e Laravel. Tenho habilidades em metodologias ágeis, como Scrum e Kanban, garantindo uma gestão eficiente de projetos. Além disso, domino ferramentas de controle de versão como Git e GitHub, bem como conceitos de design responsivo e boas práticas de usabilidade. Estou sempre buscando aprimorar minhas competências para entregar soluções modernas e de alto impacto.    </p>
    <p class="text-lg text-gray-700">Vamos conversar? Me envie uma mensagem!</p>
  </section>

  <section id="projects" class="px-20 mx-auto items-start text-left">
    <h2 class="text-3xl text-gray-700 font-bold my-12">Resume</h2>
    <div class="mb-12">
      <div class="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-bold mb-2">Desenvolvedor Web Front-End/Scrum Master Júnior</h3>
        <p class="text-gray-600">04/2021 - Presente</p>
      </div>
      <div class="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-bold mb-2">Expert em Interação</h3>
        <p class="text-gray-600">02/2021 - 04/2021</p>
      </div><div class="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-bold mb-2">Profissional de Eventos Autônomo</h3>
      <p class="text-gray-600">05/2015 - 10/2019</p>
    </div>
      <div class="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-bold mb-2">Auxiliar Administrativo</h3>
        <p class="text-gray-600">01/2016 - 06/2016</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.avatar-background {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>