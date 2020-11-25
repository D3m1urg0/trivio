<template>
  <div class="flex flex-col bg-brand-dark">
    <div
      class="flex-none text-white sm:h-56 banner"
      :class="[`bg--${page.category}`]"
    >
      <div
        class="container flex items-center justify-around flex-grow h-full px-4 py-8 pb-16 mx-auto"
      >
        <IconBase :icon-name="page.category" class="h-full" />
        <div class="text-center" :class="[`text-${page.category}`]">
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

    <div
      class="flex-none text-white sm:h-40 banner"
      :class="[`bg--${page.category}`]"
    >
      <div
        class="container flex items-center justify-around flex-grow h-full px-4 py-8 pb-16 mx-auto"
      >
        <div class="text-center" :class="[`text-${page.category}`]">
          <h1 class="text-4xl" v-text="page.author" />
        </div>
        <div
          class="z-10 w-40 h-40 bg-cover border-8 border-white rounded-full sm:-mb-8 place-self-center"
          :style="`background-image: url(${portrait})`"
          :srcset="portrait"
          :alt="page.author"
        />
      </div>
    </div>
    <div class="flex-1 mx-auto mb-16">
      <article class="p-8 mx-auto -mt-8 bg-white">
        <nuxt-content
          :document="author"
          class="mx-auto prose text-center"
          :class="[`prose-${page.category}`]"
        />
      </article>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  async asyncData({ $content, params }) {
    const page = await $content('books', params.slug).fetch()
    const author = await $content('authors', _.kebabCase(page.author)).fetch()
    return { page, author }
  },
  computed: {
    portrait() {
      return `/authors/${_.kebabCase(this.page.author)}.jpg`
    },
  },
}
</script>

<style scoped>
.banner {
  @apply w-full;
}
.bg--fantasy {
  @apply bg-gradient-to-r from-fantasy-dark via-fantasy-light to-fantasy-dark;
}
.bg--scifi {
  @apply bg-gradient-to-r from-scifi-dark via-scifi-light to-scifi-dark;
}
.bg--horror {
  @apply bg-gradient-to-r from-horror-dark via-horror-light to-horror-dark;
}
</style>
<style>
.nuxt-content-editor,
.nuxt-content-container {
  @apply bg-transparent;
}
.bg-main {
  background: radial-gradient(circle closest-side, #572361, #17162e);
}
</style>
