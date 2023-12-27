// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@vite-pwa/nuxt",
    "@vee-validate/nuxt",
    "nuxt-link-checker",
    "@hypernym/nuxt-gsap",
    "nuxt-particles",
    "nuxt-anchorscroll",
    "@nuxt/content",
    "@vueuse/nuxt",
  ],
  particles: {
    lazy: false,
  },
  build: {
    transpile: ["gsap"],
  },
});
