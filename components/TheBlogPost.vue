<template>
  <div class="w-full mt-36 md:mt-24">
    <div class="prose md:prose-xl lg:max-w-none lg:prose-xl">
      <h1 id="Blog" class="text-white xl:text-4xl">Blog Post</h1>
      <div
        class="grid items-center w-full md:grid-cols-2 gap-y-20 md:gap-y-6 md:gap-x-10 lg:grid-cols-3"
      >
        <app-card
          :twoCol="true"
          v-for="cardInfoBlog in cardInfoBlogs"
          :key="cardInfoBlog.id"
          :cardInfo="cardInfoBlog"
        ></app-card>
      </div>
      <app-show-more class="sm:w-6/12 sm:mx-auto md:w-5/12 lg:w-4/12 xl:w-3/12"
        >All Blog</app-show-more
      >
    </div>
  </div>
</template>
<script setup>
const cardInfoBlogs = ref([
  {
    id: 1,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub2.jpg",
    alt: "Photo about my project",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    date: "20 Mar, 2020",
    time: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    btn: {
      text: "read more",
    },
  },
  {
    id: 2,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub2.jpg",
    alt: "Photo about my project",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    date: "20 Mar, 2020",
    time: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    btn: {
      text: "read more",
    },
  },
  {
    id: 3,
    imageUrl:
      "https://demo.gethugothemes.com/gofolium/site/images/publications/pub2.jpg",
    alt: "Photo about my project",
    title:
      "“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest",
    date: "20 Mar, 2020",
    time: "5 min read",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    btn: {
      text: "read more",
    },
  },
]);
</script>

<style lang="scss" scoped></style>
