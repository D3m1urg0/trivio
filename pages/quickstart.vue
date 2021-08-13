<template>
  <div class="bg-brand-dark flex items-center flex-1 h-full text-white">
    <div class="container flex w-full p-4 mx-auto">
      <div
        class="border-brand-light rounded-xl inline-block w-auto max-w-md mx-auto border-4 border-double cursor-pointer"
      >
        <div class="relative h-full mx-auto">
          <img
            src="Copertina.jpeg"
            class="rounded-xl invisible h-full mx-auto"
            alt="copertina"
          />
          <transition>
            <img
              :src="`copertine/${cycle[active]}.png`"
              class="rounded-xl absolute inset-0 h-full mx-auto"
              alt="Scarica il Quickstart"
            />
          </transition>
          <div class="bottom-16 absolute inset-x-0">
            <img src="kickstarter.png" class="object-contain w-full p-4" />
            <div
              class="border-brand-dark bg-brand-light rounded-2xl max-w-[max-content] px-4 py-2 mx-auto border-2 border-white border-double"
            >
              Scarica il Quickstart gratuito !!!
            </div>
          </div>
        </div>
      </div>
      <book-marks
        :books.sync="quicks"
        :active="active"
        @rearrange="
          selectBookmark($event)
          stopTimer()
        "
        @restart="startTimer"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  layout: 'void',
  async asyncData({ $content }) {
    // const page = await $content('homepage').fetch()
    let quicks = await $content('books')
      .only(['quickTitle', 'quickHero', 'category', 'quickQuote', 'quickOrder'])
      .fetch()

    quicks = await _.map(quicks, (i) => {
      i = _.mapKeys(i, function (value, key) {
        return _.startsWith(key, 'quick')
          ? _.toLower(_.replace(key, 'quick', ''))
          : key
      })
      return i
    })
    return { quicks }
  },
  data: () => ({
    cycle: ['scifi', 'fantasy', 'horror'],
    active: 0,
    isPlaying: false,
    sliderinterval: 3000,
    sliderTimer: undefined,
  }),
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.isPlaying = true
      this.sliderTimer = setTimeout(() => {
        this.nextBook()
      }, this.sliderinterval)
    },

    stopTimer() {
      this.isPlaying = false
      clearTimeout(this.sliderTimer)
    },

    selectBookmark(book) {
      if (this.isPlaying) this.active = book
    },
    nextBook() {
      if (this.active === this.cycle.length - 1) return this.selectBookmark(0)

      this.selectBookmark(this.active + 1)
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
