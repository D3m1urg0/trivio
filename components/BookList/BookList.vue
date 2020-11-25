<template>
  <div class="">
    <book-label
      v-for="(book, i) in books"
      :key="book.title"
      class="lg:w-1/3"
      v-bind="book"
      :index="i"
    />
  </div>
</template>

<script>
// import BookLabel from './BookLabel'
export default {
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
