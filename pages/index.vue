<template>
  <div
    class="px-5 mt-20 sm:px-10 xl:mx-auto xl:container md:px-6 lg:px-10 xl:max-w-[1440px]"
  >
    <the-header id="Home"></the-header>
    <the-about id="About"></the-about>
    <the-publications></the-publications>
    <the-project></the-project>
    <the-blog-post></the-blog-post>
    <the-skills></the-skills>
    <div class="flex flex-col w-full lg:flex-row xl:justify-around">
      <the-contact class="xl:w-1/2"></the-contact>
      <the-get-in-touch class="xl:w-1/2"></the-get-in-touch>
    </div>
    <the-footer></the-footer>
    <!-- <video class="w-1/2" autoplay loop muted>
      <source src="/video/capsule.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <video class="w-1/2 h-1/2" autoplay loop muted>
      <source src="/video/question.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <AppIcons /> -->
  </div>
</template>

<script>
import { myProjects } from "@/api/api";
export default {
  // asyncData() {
  //   console.log(myProjects)
  //   myProjects.forEach((el) => console.log(el))
  // },
};
</script>
