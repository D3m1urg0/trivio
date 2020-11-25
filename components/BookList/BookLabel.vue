<template>
  <nuxt-link :to="`/books/${slug}`">
    <div
      class="flex flex-no-wrap items-baseline h-32 my-4"
      :class="[`text-${category}`]"
    >
      <IconBase
        v-if="type === 'odd'"
        :icon-name="category"
        class="z-10 flex-none h-full text-white"
      />
      <div
        class="h-24 title-label"
        :class="[`title-label--${type}`, `title-label--${category}`]"
      >
        <div
          class="relative title-label__bg"
          :class="[`title-label__bg--${type} title-label__bg--${category}`]"
        >
          <div class="text-center title-label__content">
            <h3 v-text="title" />
            <p class="hidden xl:block" v-text="author" />
          </div>
        </div>
      </div>
      <IconBase
        v-if="type === 'even'"
        :icon-name="category"
        class="z-10 flex-none h-full text-white"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      default: '',
    },
  },
  computed: {
    type() {
      return (this.index + 1) % 2 === 0 ? 'odd' : 'odd'
    },
  },
}
</script>

<style scoped>
.title-label {
  transition: all 1s;
  @apply w-full overflow-hidden cursor-pointer text-2xl;
}
.title-label--scifi {
  @apply text-xl;
}
.title-label--odd {
  transition: all 1s;
  transform: skewX(-31deg) translateX(-2.3rem);
}

.title-label--even {
  transition: all 1s;
  transform: skewX(31deg) translateX(2.3rem);
}

.title-label__bg {
  @apply -mx-16 px-24 h-full bg-gradient-to-r;
}
.title-label__bg--odd {
  transition: all 1s;
  transform: skewX(31deg);
}

.title-label__bg--even {
  transition: all 1s;
  transform: skewX(-31deg);
}
@media (min-width: 1024px) {
  .title-label--odd:hover {
    transition: all 1s;
    transform: skewX(31deg) translateX(-5.6rem);
  }
  .title-label--even:hover {
    transition: all 1s;
    transform: skewX(-31deg) translateX(5.6rem);
  }
  .title-label__bg--odd:hover {
    transition: all 1s;
    transform: skewX(-31deg);
  }
  .title-label__bg--even:hover {
    transition: all 1s;
    transform: skewX(31deg);
  }
}
.title-label__content {
  @apply flex-col text-white absolute inset-0 flex items-center justify-center w-full h-full px-24;
}
.title-label__bg--fantasy {
  @apply from-fantasy-dark via-fantasy-light to-fantasy-dark;
}
.title-label__bg--scifi {
  @apply from-scifi-dark via-scifi-light to-scifi-dark;
}
.title-label__bg--horror {
  @apply from-horror-dark via-horror-light to-horror-dark;
}
</style>
