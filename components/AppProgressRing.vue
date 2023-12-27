<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="radial-progress text-primary bg-[#171a1b] shadow-2xl"
      :style="`--value: ${percent}; --size: 4rem; --thickness: 4px`"
    >
      <span class="text-white">{{ percent }}%</span>
    </div>
    <span class="mt-2 text-2xl text-white">{{ nameSkill }}</span>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  percent?: number;
  nameSkill: string;
}>();
</script>

<style scoped>
.radial-progress:after {
  visibility: hidden;
}
</style>
