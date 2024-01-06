<template>
  <div>
    <NuxtParticles
      id="tsparticles"
      :options="options"
      url="/particles.json"
      @load="onLoad"
    >
    </NuxtParticles>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";
const emit = defineEmits(["onLoading"]);
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#000000",
    },
  },
  particles: {
    color: {
      value: "#00D41A",
    },
    links: {
      color: "#00D41A",
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
};
const onLoad = (container: Container) => {
  // Do something with the container
  setTimeout(() => {
    emit("onLoading");
  }, 700);
  // container.pause();
  // setTimeout(() => container.play(), 1000);
};
</script>

<style lang="scss" scoped></style>
