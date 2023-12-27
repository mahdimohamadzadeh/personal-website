<template>
  <div class="flex items-center justify-around w-full my-20 md:my-14">
    <span class="h-6 border-l-2 border-primary"></span>
    <nuxt-link :to="link"
      ><button class="text-lg font-medium text-white btn btn-primary xl:text-sm">
        <slot></slot></button
    ></nuxt-link>
    <span class="h-6 border-r-2 border-primary"></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  link?: string;
}>();
</script>
