<template>
  <div class="bg-brand-dark h-full text-white">
    <div class="md:h-20 md:text-right">
      <IconBase
        icon-name="trivio"
        class="md:mr-0 md:h-24 h-32 p-4 mx-auto text-white"
      />
    </div>
    <div class="flex items-center flex-1 w-full h-full">
      <div class="flex w-full px-4 mx-auto">
        <div
          class="border-brand-light rounded-xl inline-block w-auto max-w-md mx-auto border-4 border-double cursor-pointer"
        >
          <a
            href="/pdf/Collana Trivio Librigame - Il Quickstart.pdf"
            download="Collana Trivio Librigame - Il Quickstart.pdf"
          >
            <div class="relative h-full mx-auto">
              <img
                src="/copertina.jpeg"
                class="rounded-xl md:invisible w-full h-full mx-auto"
                alt="copertina"
              />
              <transition>
                <img
                  :src="`/copertine/${cycle[active]}.png`"
                  class="md:block rounded-xl absolute inset-0 hidden h-full mx-auto"
                  alt="Scarica il Quickstart"
                />
              </transition>
              <div class="bottom-16 absolute inset-x-0">
                <img src="/kickstarter.png" class="object-contain w-full p-4" />
                <div
                  class="border-brand-dark bg-brand-light rounded-2xl max-w-[max-content] px-4 py-2 mx-auto border-2 border-double animate-pulse"
                >
                  Scarica il Quickstart gratuito !!!
                </div>
              </div>
            </div>
          </a>
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
    timer: 0,
  }),
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.isPlaying = true
      this.timer = setTimeout(() => {
        this.nextBook()
      }, this.sliderinterval)
    },

    stopTimer() {
      this.isPlaying = false
      clearTimeout(this.timer)
    },

    resetTimer() {
      clearTimeout(this.timer)
      this.startTimer()
    },

    advanceBookmark(index) {
      if (this.isPlaying) {
        this.resetTimer()
      }
      this.active = index
    },

    selectBookmark(book) {
      this.active = book
      this.stopTimer()
    },

    nextBook() {
      if (this.active === this.cycle.length - 1) {
        return this.advanceBookmark(0)
      } else {
        this.advanceBookmark(this.active + 1)
      }
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
