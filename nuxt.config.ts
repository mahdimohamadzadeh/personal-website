// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
  build: {
    transpile: ["gsap"],
  },
});
