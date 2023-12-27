// const { $gsap } = useNuxtApp();

// import { useRoute, useRouter } from "vue-router";

// import ScrollToPlugin from "gsap/ScrollToPlugin";
// const onMenu = ref(false);
// const onLink = () => {
//   setTimeout(() => {
//     onMenu.value = false;
//   }, 300);
// };
// const route = useRoute();
// const router = useRouter();
// const activeHash = ref(route.hash || "");
// const updateHash = (id: string) => {
//   if (process.client) {
//     activeHash.value = "#" + id;
//     window.history.replaceState(null, "", activeHash.value);
//   }
// };
// const completeAnimation = ref(false);
// onMounted(() => {
//   $gsap.registerPlugin(ScrollToPlugin);
//   //@ts-ignore
// });
// const scrollToID = (id: string, y: number) => {
//   updateHash(id);
//   $gsap.to(window, {
//     stagger: 0.3,
//     duration: 0.7,
//     ease: "power4.inOut",
//     // autoAlpha: 0,
//     scrollTo: { y: y, offsetY: 100 },
//     onComplete: () => {
//       completeAnimation.value = true;
//     },
//   });
// };
