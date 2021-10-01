<template>
  <header
    class="bg-brand-dark fixed inset-x-0 top-0 z-20 flex-none h-16 text-white"
  >
    <nav class="container flex items-center justify-between h-16 mx-auto">
      <nuxt-link to="/" class="h-full">
        <IconBase icon-name="trivio" class="h-full px-4 py-2 text-white" />
      </nuxt-link>
      <div class="flex items-center justify-between">
        <mailing-list />
        <a
          class="h-16 p-2"
          href="https://www.kickstarter.com/projects/collanatrivio/librigame-collana-trivio"
          target="_blank"
        >
          <div class="bg-ks w-12 h-12 p-4 rounded-full cursor-pointer">
            <img
              class="object-contain"
              src="kickstarter-logo-k-white.png"
              alt="Kickstarter"
            />
          </div>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import MailingList from '@/components/MailingList'
export default {
  components: { 'mailing-list': MailingList },
}
</script>
