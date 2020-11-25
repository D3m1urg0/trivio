<template>
  <div>
    <slot name="trigger" :open="open" />
    <div
      v-if="modal"
      class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75"
      @click="modal = false"
    >
      <div class="inset-0 flex max-w-4xl max-h-screen overflow-hidden">
        <div
          class="flex flex-col m-8 overflow-hidden bg-white shadow-md"
          @click.stop=""
        >
          <div
            class="flex-none px-4 py-2 font-bold text-white bg-brand-dark"
            v-text="title || content.title"
          ></div>
          <div class="flex p-4 px-8 mx-auto overflow-auto text-gray-800">
            <slot />
            <nuxt-content
              v-if="content"
              :document="content"
              class="prose text-center text-current"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    modal: false,
  }),
  methods: {
    open() {
      this.modal = true
    },
  },
}
</script>
