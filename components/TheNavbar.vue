<template>
  <div class="flex justify-center w-full">
    <Transition name="side">
      <div
        class="fixed top-0 z-40 w-full h-20 shadow-2xl xl:h-16 navbar text-colorText rounded-b-2xl bg-neutral xl:max-w-[1440px]"
      >
        <div class="z-50 navbar-start">
          <ul class="hidden text-white lg:block">
            <div class="flex items-center ml-5">
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Home')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">Home</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('About')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">About</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Publication')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs"
                    >Publication</span
                  >
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Project')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">Project</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Blog')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">Blog</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Skills')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">Skills</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <nuxt-link
                  class="mr-3 border-0 hover:text-primary btn"
                  @click="scrollToID('Contact')"
                >
                  <span class="text-lg xl:text-sm 2xl:text-xs">Contact</span>
                </nuxt-link>
              </li>
              <li class="flex">
                <select
                  class="w-20 text-white select select-primary bg-neutral"
                >
                  <option disabled>Pick your Language</option>
                  <option>En</option>
                  <option>Fa</option>
                  <option>Ar</option>
                  <option>De</option>
                </select>
              </li>
            </div>
          </ul>
          <div class="text-white lg:hidden">
            <button
              v-if="onMenu == false"
              @click="onMenu = true"
              class="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 sm:w-10 sm:h-10"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75Zm0 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                />
              </svg>
            </button>
            <button
              v-if="onMenu == true"
              @click="onMenu = false"
              class="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 sm:w-10 sm:h-10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                />
              </svg>
            </button>
            <TheSideBar v-if="onMenu" @link="onLink" />
          </div>
        </div>
        <div class="z-40 text-white navbar-end">
          <nuxt-link to="/" class="normal-case border-0 btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61Zm-189.47 7l73.45 51.9l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89Zm87.32 91l-20.73-14.65L128 185.8l20.73 14.64Zm70.91-50.1l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9Z"
              />
            </svg>
            <span class="mt-1 ml-3 text-2xl font-bold sm:mt-0">prowebsi</span>
          </nuxt-link>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRoute } from "vue-router";
const onMenu = ref(false);
const onLink = () => {
  setTimeout(() => {
    onMenu.value = false;
  }, 300);
};
const offset = 120;
const route = useRoute();
const tagId = ref();
const activeHash = ref(route.hash || "");
const updateHash = (id: string) => {
  if (process.client) {
    window.history.pushState(null, "", "#" + id);
    activeHash.value = "#" + id;
  }
};
onMounted(() => {
  $gsap.registerPlugin(ScrollToPlugin);
  if (route.hash) {
    $gsap.to(window, {
      duration: 1,
      scrollTo: { y: route.hash, offsetY: offset },
    });
  }
});
let scrollTo: any;
const scrollToID = (id: string) => {
  tagId.value = id;
  // router.replace({ hash: "#" + id });
  updateHash(id);
  scrollTo = $gsap.to(window, {
    ease: "power4.inOut",
    duration: 0.7,
    scrollTo: { y: "#" + id, offsetY: offset, autoKill: true },
  });
};
const { y } = useWindowScroll();
watch(y, () => {
  const el = document.getElementById(tagId.value);
  if (el && el?.getBoundingClientRect().top <= offset + 2) {
    // router.replace({ hash: "#" + item.id });
    updateHash(tagId.value);
    return;
  }
});
</script>

<style scoped>
.side-enter-active {
  transition: all 0.2s ease-out;
}
.side-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.side-enter-from,
.side-leave-to {
  transform: translatex(-30px);
  opacity: 0;
}
</style>
