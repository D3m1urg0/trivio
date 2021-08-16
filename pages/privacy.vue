<template>
  <div class="bg-brand-dark flex flex-col">
    <div class="sm:h-56 banner flex-none text-white">
      <div
        class="container flex items-center justify-around flex-grow h-full px-4 py-8 pb-16 mx-auto"
      >
        <div class="text-center">
          <h1 class="text-5xl" v-text="page.title" />
        </div>
      </div>
    </div>
    <div class="flex-1 mx-auto mb-16">
      <article class="p-8 mx-auto -mt-8 bg-white">
        <nuxt-content
          :document="page"
          class="mx-auto prose text-center"
          :class="[`prose-${page.category}`]"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('privacy').fetch()
    return { page }
  },
}
</script>

<style>
.bg-main {
  background: radial-gradient(circle closest-side, #572361, #17162e);
  @apply overflow-hidden;
}
</style>
