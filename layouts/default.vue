<template>
  <div>
    <app-loading-animate v-if="loading"></app-loading-animate>
    <NuxtLoadingIndicator />
    <the-back-ground-animation
      @onLoading="onLoading"
    ></the-back-ground-animation>
    <section class="min-h-screen t-col">
      <the-navbar />
      <div class="flex flex-col flex-1">
        <nuxt-page></nuxt-page>
      </div>
      <footer>footer from layout default</footer>
    </section>
  </div>
</template>

<script setup>
const loading = ref(true);

const onLoading = () => {
  loading.value = false;
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  background: #000;
}
::-webkit-scrollbar-track {
  background-color: #000000;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb {
  background-color: #13ca78;
  border-radius: 50px;
}
:root {
  scrollbar-color: rgb(255, 255, 255) rgb(94, 255, 134) !important ;
  scrollbar-width: thin !important;
}
</style>
