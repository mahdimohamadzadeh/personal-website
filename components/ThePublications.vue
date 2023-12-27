<template>
  <div>
    <div class="w-full mt-36">
      <div class="prose md:prose-lg lg:max-w-none lg:prose-xl">
        <h1 class="text-white xl:text-4xl" id="Publication">Publications</h1>
        <div class="grid items-center w-full gap-y-20 md:gap-y-6 xl:gap-y-4">
          <app-card
            class="items-center md:flex"
            v-for="cardInfoPublication in cardInfoPublications"
            :key="cardInfoPublication.id"
            :cardInfo="cardInfoPublication"
          ></app-card>
        </div>
      </div>
      <app-show-more
        class="sm:w-6/12 sm:mx-auto md:w-5/12 lg:w-4/12 xl:w-3/12"
        link="/allPublications"
        >All Publications</app-show-more
      >
    </div>
  </div>
</template>

<script setup>
const cardInfoPublications = ref([
  {
    id: 1,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub1.jpg",
    alt: "Photo about blog post",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    date: "20 Mar, 2020 ",
    author: "mahdi",
    links: [
      {
        id: 1,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "PDF",
      },
      {
        id: 2,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "Code",
      },
      {
        id: 6,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "Source File",
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub1.jpg",
    alt: "Photo about blog post",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    date: "20 Mar, 2020 ",
    author: "mahdi",
    links: [
      {
        id: 1,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "PDF",
      },
      {
        id: 2,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "Code",
      },
      {
        id: 6,
        url: "https://demo.gethugothemes.com/gofolium/site/",
        label: "Source File",
      },
    ],
  },
]);
</script>

<style scoped></style>
