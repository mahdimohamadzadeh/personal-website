<template>
  <div ref="target">
    <ul
      class="fixed w-full h-screen py-4 my-4 overflow-hidden shadow -left-1 top-14 bg-neutral"
    >
      <div
        class="flex flex-col items-center space-y-3 sm:h-4/5 sm:justify-around"
      >
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#Home' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
              />
            </svg>
            <span class="mt-2 text-2xl">Home</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#About' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.5 12.4L1.6 8.5l3.9-3.9l3.9 3.9l-3.9 3.9ZM9 22v-5q-1.525-.125-3.025-.363T3 16l.5-2q2.1.575 4.213.788T12 15q2.175 0 4.288-.213T20.5 14l.5 2q-1.475.4-2.975.638T15 17v5H9Zm3-15q-1.25 0-2.125-.875T9 4q0-1.25.875-2.125T12 1q1.25 0 2.125.875T15 4q0 1.25-.875 2.125T12 7Zm0 7q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Zm5.05-2l-1.7-3l1.7-3h3.4l1.7 3l-1.7 3h-3.4Z"
              />
            </svg>
            <span class="mt-2 text-2xl">About</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#Publication' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm-1-2.05V18q-.825 0-1.413-.588T9 16v-1l-4.8-4.8q-.075.45-.138.9T4 12q0 3.025 1.988 5.3T11 19.95Zm6.9-2.55q.5-.55.9-1.188t.662-1.325q.263-.687.4-1.412T20 12q0-2.45-1.363-4.475T15 4.6V5q0 .825-.588 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4Z"
              />
            </svg>
            <span class="mt-2 text-2xl">Publication</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#Project' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m9.5 14.5l-6-2.5V4l6-2.5v13Zm-6.885-1.244A1 1 0 0 1 2 12.333V3.667a1 1 0 0 1 .615-.923L8.923.115A1.5 1.5 0 0 1 11 1.5V2h1.25c.966 0 1.75.783 1.75 1.75v8.5A1.75 1.75 0 0 1 12.25 14H11v.5a1.5 1.5 0 0 1-2.077 1.385l-6.308-2.629ZM11 12.5h1.25a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H11v9Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="mt-2 text-2xl">Project</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#blogPost' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  d="M8 21h8a5 5 0 0 0 5-5v-3a3 3 0 0 0-3-3h-1V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5z"
                />
                <path
                  d="M7 8.5A1.5 1.5 0 0 1 8.5 7h3A1.5 1.5 0 0 1 13 8.5v0a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 8.5zm0 7A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 15.5z"
                />
              </g>
            </svg>
            <span class="mt-2 text-2xl">Blog</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            @click="scrollToID('Skills', 5050)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M14.057 31.88c-2.854-.37-5.792-1.594-7.932-3.307C1.307 24.729-.88 18.656.37 12.625c.536-2.604 1.932-5.344 3.719-7.318a15.548 15.548 0 0 1 4.677-3.583C11.12.531 13.37-.005 16.026-.005c1.906 0 3.438.25 5.193.849a16.012 16.012 0 0 1 9.948 9.943c.938 2.75 1.109 5.677.51 8.578c-.479 2.292-1.714 4.87-3.234 6.734c-.625.771-2.063 2.146-2.818 2.703a16.211 16.211 0 0 1-7.708 3.078c-.823.104-3.063.099-3.859 0zm4.36-1.338a14.904 14.904 0 0 0 9.672-6.047c2.703-3.797 3.427-8.891 1.901-13.333c-.359-1.042-1.25-2.781-1.901-3.698c-.724-1.026-2.516-2.823-3.547-3.547c-1-.708-2.703-1.568-3.865-1.948A14.753 14.753 0 0 0 8.01 3.584a15.291 15.291 0 0 0-4.385 4.385A14.744 14.744 0 0 0 2.01 20.63c.385 1.161 1.245 2.87 1.948 3.87c.729 1.026 2.521 2.823 3.547 3.547c.922.646 2.656 1.536 3.698 1.901a14.9 14.9 0 0 0 7.214.594zm-5.542-5.365a5.628 5.628 0 0 1-2.109-.771c-.578-.37-4.943-4.646-5.156-5.047c-.245-.458.182-1.292.792-1.547l.286-.12l-.88-.896c-.484-.495-.943-1.021-1.016-1.167c-.172-.333-.177-1.047-.016-1.365c.068-.13.229-.328.354-.438c.214-.177.234-.24.214-.688c-.026-.396.01-.552.182-.849c.25-.427.766-.714 1.271-.719c.281 0 .354-.036.474-.245c.313-.547 1.208-.745 1.891-.411l.37.177l.182-.177c.25-.229.75-.432 1.078-.432c.656 0 1.583.755 1.583 1.286c0 .635-.578.745-1.151.219c-.38-.354-.573-.391-.729-.141c-.078.12.109.344 1.229 1.474c1.12 1.125 1.323 1.365 1.323 1.578a.656.656 0 0 1-.63.62c-.203 0-.536-.292-2.073-1.823c-1.568-1.563-1.854-1.813-1.979-1.734c-.339.214-.224.37 1.609 2.208c.995 1 1.813 1.885 1.813 1.969c0 .172-.156.49-.286.573a.756.756 0 0 1-.339.063c-.214.005-.542-.292-2.286-2.031c-1.75-1.74-2.063-2.021-2.188-1.943c-.344.219-.229.37 1.766 2.375c1.089 1.089 2 2.063 2.026 2.167c.057.188-.068.516-.234.63a.8.8 0 0 1-.349.063c-.214 0-.484-.234-1.927-1.677c-1.391-1.391-1.714-1.677-1.891-1.661c-.5.057-.323.281 2.26 2.87c2.24 2.245 2.526 2.563 2.526 2.797a.514.514 0 0 1-.224.438c-.401.318-.557.245-1.568-.734c-.516-.495-1.047-.974-1.188-1.063c-.255-.156-.901-.224-1.021-.099c-.042.036.911 1.042 2.115 2.234c2.005 1.984 2.234 2.188 2.823 2.469a3.943 3.943 0 0 0 3.495.01c1.682-.802 2.615-2.75 2.156-4.516c-.229-.88-.516-1.302-1.672-2.495c-1.333-1.365-1.641-1.74-1.969-2.396c-.365-.734-.521-1.448-.521-2.339c0-.964.099-1.401.526-2.302c.406-.859 1.255-1.76 2.094-2.224c1.646-.917 3.813-.839 5.385.188c.313.203 1.443 1.266 2.849 2.677c2.089 2.094 2.328 2.365 2.328 2.604c0 .568-.464 1.198-.979 1.328c-.193.052-.156.104.719.995c.51.516.984 1.073 1.057 1.245c.245.589.135 1.161-.313 1.63c-.229.24-.26.323-.266.802c-.005.422-.052.599-.219.839a1.48 1.48 0 0 1-1.188.651c-.323 0-.385.031-.547.276c-.365.563-1.313.76-1.927.396l-.307-.182l-.219.214c-.484.464-1.266.526-1.859.146c-.479-.302-.833-.724-.833-.99c0-.234.339-.62.547-.62c.198 0 .464.156.766.438c.302.286.563.286.604-.005c.021-.156-.229-.453-1.24-1.469c-1.063-1.073-1.266-1.318-1.266-1.526a.85.85 0 0 1 .063-.339c.115-.172.438-.292.635-.24c.104.026.984.839 1.948 1.802c.969.969 1.818 1.76 1.896 1.76c.214 0 .354-.214.255-.396c-.047-.083-.865-.922-1.813-1.87c-1.484-1.479-1.724-1.755-1.724-1.974a.793.793 0 0 1 .063-.344c.089-.13.401-.286.578-.286c.078 0 1.057.911 2.177 2.026c2.052 2.042 2.203 2.156 2.417 1.818c.078-.125-.203-.443-1.943-2.188c-1.797-1.802-2.036-2.073-2.036-2.307c0-.161.073-.328.188-.432c.38-.359.495-.286 2.344 1.552c1.75 1.745 1.906 1.859 2.12 1.526c.078-.125-.276-.51-2.448-2.688c-2.365-2.375-2.536-2.568-2.536-2.844c0-.417.24-.615.703-.583c.083.005.583.427 1.099.932c.521.505 1.083.979 1.25 1.052c.328.135.708.156.87.052c.156-.099-4.167-4.354-4.729-4.651a4.013 4.013 0 0 0-5.547 1.844c-.271.578-.307.75-.344 1.495c-.031.703-.005.922.146 1.37c.271.797.505 1.125 1.719 2.365c1.313 1.344 1.563 1.651 1.896 2.37c.938 2 .542 4.313-1.005 5.854c-1.177 1.182-2.781 1.734-4.37 1.516z"
              />
            </svg>
            <span class="mt-2 text-2xl">Skills</span>
          </nuxt-link>
        </li>
        <li class="max-w-full" @click="$emit('link')">
          <nuxt-link
            class="mr-3 border-0 hover:text-primary btn"
            :to="{ path: '/', hash: '#Contact' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"
              />
            </svg>
            <span class="mt-2 text-2xl">Contact</span>
          </nuxt-link>
        </li>
        <li class="max-w-full">
          <select
            class="w-full max-w-xs text-white select select-primary bg-neutral"
          >
            <option disabled selected>Pick your Language</option>
            <option>En</option>
            <option>Fa</option>
            <option>Ar</option>
            <option>De</option>
          </select>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const offsetY = ref(100);
const activeHash = ref(route.hash || "");
const updateHash = (id: string) => {
  if (process.client) {
    window.history.pushState(null, "", "#" + id);
    activeHash.value = "#" + id;
  }
};
const completeAnimation = ref(false);
onMounted(() => {
  $gsap.registerPlugin(ScrollToPlugin);
  //@ts-ignore
  const tl = new $gsap.timeline();
  tl.from(window, {
    ease: "power4",
    duration: 1000,
    autoAlpha: 0,
    x: 0,
    stagger: 0.3,
    onComplete: () => {
      completeAnimation.value = true;
      $gsap.set(window, { clearProps: "transform" });
    },
  });
});
const scrollToID = (id: string, y: number) => {
  // router.replace({ hash: "#" + id });
  updateHash(id);
  $gsap.to(window, {
    duration: 1,
    scrollTo: { y: y, offsetY: 100 },
  });
};
</script>
