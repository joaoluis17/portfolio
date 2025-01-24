<template>
  <div class="font-sans app-container max-w-5xl">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
}

main {
  width: 100%;
  text-align: center;
}
</style>
