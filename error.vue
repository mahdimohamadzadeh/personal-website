<template>
  <div
    class="flex-col h-screen space-y-2 t-center bg-gradient-to-tr from-green-800 via-green-500 to-green-300"
  >
    <h1 class="text-5xl font-black">
      {{ error.statusCode }}
    </h1>
    <p>
      {{ error.statusMessage }}
    </p>
    <button class="btn btn-secondary" @click="handleError">
      بازگشت به صفحه اصلی
    </button>
  </div>
</template>
<script setup lang="ts">
type ErrorProp = {
  statusCode: string;
  statusMessage: string;
};
const props = defineProps<{ error: ErrorProp }>();
const handleError = () => clearError({ redirect: "/" });
</script>
