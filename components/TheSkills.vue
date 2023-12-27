<template>
  <div class="mt-20 prose md:mt-32 lg:max-w-none md:prose-lg lg:mt-24">
    <h1 id="Skills" class="text-white xl:text-4xl">Skills</h1>
    <div
      class="grid justify-between w-full grid-cols-2 my-20 sm:w-2/3 gap-y-20 sm:mx-auto md:grid-cols-4 md:w-full lg:grid-cols-7 lg:w-10/12 xl:w-full"
    >
      <app-progress-ring
        v-for="skill in skills"
        :key="skill.id"
        :percent="skill.percent"
        :nameSkill="skill.nameSkill"
      ></app-progress-ring>
    </div>
  </div>
</template>

<script setup>
const skills = ref([
  {
    id: 1,
    nameSkill: "js",
    percent: 50,
  },
  {
    id: 1,
    nameSkill: "js",
    percent: 50,
  },

  {
    id: 2,
    nameSkill: "HTML",
    percent: 80,
  },
  {
    id: 3,
    nameSkill: "HTML",
    percent: 80,
  },
  {
    id: 4,
    nameSkill: "HTML",
    percent: 80,
  },
  {
    id: 4,
    nameSkill: "HTML",
    percent: 80,
  },
  {
    id: 4,
    nameSkill: "HTML",
    percent: 80,
  },
]);
</script>

<style lang="scss" scoped></style>
