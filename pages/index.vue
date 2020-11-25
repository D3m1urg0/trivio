<template>
  <div>
    <main class="bg-main">
      <div
        class="container relative flex justify-center h-full px-4 py-8 mx-auto border-t border-brand-light"
      >
        <raindrops class="pointer-events-none" />
        <div
          class="z-10 flex flex-col items-center flex-1 max-w-2xl md:flex-row"
        >
          <div class="flex justify-center flex-1 p-4">
            <div class="flex justify-center w-64 h-64">
              <IconBase icon-name="trivio" class="flex-1 text-white" />
            </div>
          </div>
          <div class="flex flex-col flex-1 p-4">
            <nuxt-content :document="page" class="prose text-white" />
          </div>
        </div>
      </div>
    </main>
    <div
      class="container flex flex-wrap justify-around px-4 py-12 mx-auto text-center"
    >
      <div class="flex-1 p-8">
        <h3 class="mb-2 text-lg font-bold text-brand-light">LIBRIGAME</h3>
        <p>
          Collana Trivio è dedicata all'esplorazione del Librogame attraverso
          soluzioni narrative sperimentali e autori molto diversi tra loro.
        </p>
      </div>

      <div class="flex-1 p-8">
        <h3 class="mb-2 text-lg font-bold text-brand-light">TRE STRADE</h3>
        <p>
          Il numero tre è fondamentale nel nostro progetto. Tre storie, tre
          protagonisti, tre modi diversi di vivere l'avventura.
        </p>
      </div>
      <div class="flex-1 p-8">
        <h3 class="mb-2 text-lg font-bold text-brand-light">CROWDFUNDING</h3>
        <p>
          Primavera 2021: è la nostra data. Il progetto partirà da un
          crowdfunding, e questo è il posto migliore per rimanere aggiornati.
        </p>
      </div>
    </div>
    <div class="bg-brand-dark">
      <book-list class="flex flex-col p-10 lg:flex-row" :books="books" />
    </div>
  </div>
</template>

<script>
import BookList from '@/components/BookList/BookList'
import Raindrops from '@/components/Raindrops'
export default {
  components: { 'book-list': BookList, raindrops: Raindrops },
  async asyncData({ $content }) {
    const page = await $content('homepage').fetch()
    const books = await $content('books')
      .only(['title', 'category', 'author', 'slug'])
      .fetch()

    return { page, books }
  },
}
</script>

<style>
.bg-main {
  background: radial-gradient(circle closest-side, #572361, #17162e);
  @apply overflow-hidden;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
