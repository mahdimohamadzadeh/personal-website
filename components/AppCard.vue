<template>
  <div class="pb-2 bg-neutral md:gap-x-4">
    <div
      class="md:w-1/2"
      :class="twoCol ? 'md:w-full xl:w-full' : 'lg:w-1/3 xl:w-3/12'"
    >
      <!-- <img
        v-if="cardInfo && cardInfo.imageUrl"
        :src="cardInfo.imageUrl"
        :alt="cardInfo.alt"
        class="w-full rounded-lg"
      /> -->
      <nuxt-img
        v-if="cardInfo && cardInfo.imageUrl"
        :src="cardInfo.imageUrl"
        :alt="cardInfo.alt"
        class="w-full rounded-lg"
      />
    </div>
    <div
      class="relative text-white md:w-1/2 lg:pr-10"
      :class="twoCol ? 'md:w-full md:px-3 xl:p-0 ' : 'lg:w-2/3'"
    >
      <h2
        v-if="cardInfo && cardInfo.title"
        class="pr-2 text-justify md:text-xl md:m-0 lg:text-2xl lg:tracking-wide lg:w-full xl:text-sm xl:w-11/12"
        :class="
          twoCol ? 'md:text-lg md:w-8/12 md:font-bold  xl:tracking-normal' : ''
        "
      >
        {{ cardInfo.title }}
      </h2>
      <p
        class="md:text-sm md:mt-6 lg:text-lg xl:text-sm xl:font-light xl:w-11/12"
        :class="twoCol ? 'md:text-base/7 md:w-10/12 ' : ''"
        v-if="cardInfo && cardInfo.description"
      >
        {{ cardInfo.description }}
      </p>
      <div
        v-if="(cardInfo && cardInfo.date && cardInfo.author) || cardInfo.time"
        class="flex items-center my-3 sm:w-9/12 md:w-full md:m-0"
        :class="
          cardInfo.time
            ? 'justify-between '
            : 'grid grid-cols-2 gap-x-4 lg:flex'
        "
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mt-4 mr-2 w-7 h-7 text-primary xl:w-5 xl:h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"
            />
          </svg>
          <h3 class="block text-[#7B756D] md:text-lg xl:text-base">
            {{ cardInfo.date }}
          </h3>
        </div>
        <div class="flex items-center md:px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mt-5 mr-2 w-7 h-7 text-primary xl:w-5 xl:h-5"
            viewBox="0 0 24 24"
            v-if="cardInfo.time"
          >
            <path
              fill="currentColor"
              d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm0-9Zm2.8 4.2l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4ZM12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6Q9.075 6 7.037 8.038T5 13q0 2.925 2.038 4.963T12 20Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mt-5 mr-2 w-7 h-7 text-primary xl:w-5 xl:h-5"
            viewBox="0 0 24 24"
            v-if="cardInfo.author"
          >
            <path
              fill="currentColor"
              d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
            />
          </svg>
          <h3 class="block text-[#7B756D] md:text-lg xl:text-base">
            {{ cardInfo.author || cardInfo.time }}
          </h3>
        </div>
      </div>
      <div
        v-if="cardInfo && cardInfo.links"
        class="flex justify-between w-8/12 sm:w-5/12 md:w-9/12 lg:w-1/3 lg:mt-5 xl:w-1/3"
      >
        <a
          v-for="link in cardInfo.links"
          :key="link.id"
          :href="link.url"
          class="text-xl text-primary xl:text-base"
          >{{ link.label }}</a
        >
      </div>
      <button
        class="my-3 text-white btn btn-primary mt-7 xl:btn-sm xl:text-xs"
        v-if="cardInfo.btn"
      >
        {{ cardInfo.btn.text }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cardInfo: any;
  twoCol?: boolean;
}>();
</script>

<style lang="scss" scoped></style>
