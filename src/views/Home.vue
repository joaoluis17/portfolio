<template>
  <section class="w-full inline-flex justify-between px-12">
    <div id="home" class="p-8 bg-white flex flex-col items-start">
      <div class="avatar-background rounded-full overflow-hidden w-32 h-32 mb-4">
        <img src="../assets/perfil.jpg" height="150" width="150" alt="Avatar-Photo"/>
      </div>
      <h1 className="text-4xl text-gray-700 font-bold mb-2">João Luis Prado</h1>
      <p className="text-lg text-gray-600">Desenvolvedor web Front-End & Gestor de Projetos</p>
      <p className="text-sm text-gray-400">(Vue JS | Laravel | Scrum | Kanban) - Brasil</p>

      <div class="ellipsable" data-badges-list-target="badge">
        <label class="badge badge-pill d-inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="mr-2 badge-pill-icon pw-icon--wide text-purple pw-icon pw-icon-dev  w-12 h-12"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg>
          <span class="ellipsable tw-text-template-text">Front-End Developer</span>
        </label>
      </div>
      <div class="ellipsable" data-badges-list-target="badge">
        <label class="badge badge-pill d-inline-flex align-items-center mw-100 tw-border-template-stroke">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="mr-2 badge-pill-icon pw-icon--wide text-purple pw-icon pw-icon-dev"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg>
          <span class="ellipsable tw-text-template-text">Front-End Developer</span>
        </label>
      </div>
    </div>
    <router-link to="/contact" className="mt-12">
      <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
        Entre em Contato
      </button>
    </router-link>
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