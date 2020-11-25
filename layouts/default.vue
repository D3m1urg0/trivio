<template>
  <div class="flex flex-col min-h-screen">
    <app-header class="flex-none" />
    <Nuxt class="pt-16" />
    <CookieControl locale="it">
      <template #bar>
        <p v-text="privacy.alert" />
        <popup v-cloak :content="privacy">
          <template #trigger="{ open }">
            <a class="cursor-pointer hover:underline" @click="open">
              informativa Privacy
            </a>
          </template>
        </popup>
      </template>
    </CookieControl>

    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/LayoutsComponents/Header'
import Footer from '@/components/LayoutsComponents/Footer'
import Popup from '@/components/popup'

export default {
  components: { 'app-header': Header, 'app-footer': Footer, popup: Popup },
  data: () => ({
    privacy: null,
  }),
  created() {
    this.getPrivacy()
  },
  methods: {
    async getPrivacy() {
      const privacy = await this.$content('privacy').fetch()
      this.privacy = privacy
    },
  },
}
</script>
