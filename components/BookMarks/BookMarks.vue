<template>
  <div
    class="md:flex relative flex-1 hidden gap-4 my-10"
    @mouseout="$emit('restart')"
    @mouseleave="$emit('restart')"
  >
    <book-mark
      v-for="(book, index) in sortedBooks"
      :key="book.title"
      v-bind="book"
      :class="[
        {
          'top-0': book.order === 0,
          'top-1/2 -mt-32': book.order === 1,
          'bottom-0': book.order === 2,
          'z-10': index === 1,
          'z-20': active === index,
        },
      ]"
      @mouseover.native="$emit('rearrange', book.order)"
    />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['books', 'active'],
  computed: {
    sortedBooks() {
      return _.sortBy(this.books, 'order')
    },
  },
  // methods: {
  //   rearrange(book) {
  //     this.$emit(
  //       'update:books',
  //       _.map(this.books, (i) => {
  //         i.zIndex = i.title === book.title ? 2 : i.zIndex - 1
  //         return i
  //       })
  //     )
  //   },
  // },
}
</script>
