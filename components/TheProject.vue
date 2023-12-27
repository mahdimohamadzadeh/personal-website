<template>
  <div class="w-full mt-36 md:mt-24">
    <div class="prose md:prose-xl lg:max-w-none lg:prose-xl">
      <h1 id="Project" class="text-white xl:text-4xl">My Projects</h1>
      <div
        class="grid items-center w-full md:grid-cols-2 gap-y-20 md:gap-y-6 md:gap-x-10 xl:grid-cols-3"
      >
        <app-card
          :twoCol="true"
          v-for="cardInfoProject in cardInfoProjects"
          :key="cardInfoProject.id"
          :cardInfo="cardInfoProject"
        ></app-card>
      </div>
      <app-show-more class="sm:w-6/12 sm:mx-auto md:w-5/12 lg:w-4/12 xl:w-3/12"
        >All Projects</app-show-more
      >
    </div>
  </div>
</template>
<script setup>
const cardInfoProjects = ref([
  {
    id: 1,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub2.jpg",
    alt: "Photo about my project",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    id: 2,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub2.jpg",
    alt: "Photo about my project",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
]);
</script>
