<template>
  <div class="mt-20 prose md:mt-32 md:prose-lg lg:max-w-none lg:w-full">
    <h1 id="Contact" class="text-white xl:text-4xl">Contact Me</h1>
    <form
      @click.prevent="onSubmit"
      class="grid w-full grid-cols-1 mb-32 mt-16 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-1 h-[30rem] lg:h-[35rem] xl:h-[32rem]"
    >
      <div class="mb-6">
        <label class="text-2xl label xl:text-xl" for="nameInput"
          >Your Name</label
        >
        <input
          name="nameInput"
          type="text"
          placeholder="Type Your Name"
          class="w-full max-w-xs mt-1 input input-bordered input-primary bg-neutral placeholder:text-base xl:placeholder:text-sm xl:max-w-none xl:w-7/12"
        />
      </div>
      <div class="mb-6">
        <label class="text-2xl label xl:text-xl" for="emailInput"
          >Your Email</label
        >
        <input
          name="emailInput"
          type="text"
          placeholder="Type Your Email"
          class="w-full max-w-xs mt-1 input input-bordered input-primary bg-neutral placeholder:text-base xl:max-w-none xl:w-7/12 xl:placeholder:text-sm"
        />
      </div>
      <div class="mb-6">
        <label class="text-2xl label xl:text-xl" for="messageInput"
          >Your Message</label
        >
        <textarea
          name="messageInput"
          type="text"
          placeholder="Type Your Message"
          class="w-full h-40 max-w-xs mt-1 textarea textarea-bordered textarea-primary bg-neutral placeholder:text-base xl:max-w-none xl:w-7/12 xl:placeholder:text-sm"
        />
      </div>
      <button
        type="submit"
        class="w-1/2 text-white sm:row-start-3 btn btn-primary sm:mt-20 md:mt-24 lg:row-auto xl:mt-32 xl:w-1/3"
      >
        send now
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
