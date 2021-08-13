<template>
  <div class="absolute">
    <div
      class="isolate relative flex-1 h-64 overflow-hidden"
      @hover="$emit('book-hover')"
    >
      <div class="flex items-center h-full gap-4">
        <div class="h-full col-start-1 min-w-[max-content] flex-none">
          <img :src="`pg/${category}.png`" class="h-full" />
        </div>
        <p
          class="lg:line-clamp-8 flex-shrink hidden col-start-2 m-4 italic text-center"
        >
          "{{ quote }}"
        </p>
        <div class="row-span-full flex flex-col flex-auto col-start-3 gap-4">
          <IconBase
            :icon-name="category"
            class="z-10 self-end flex-none h-32 col-start-3 row-start-1 text-white"
          />
          <p
            class="flex-1 text-2xl whitespace-pre-wrap"
            :class="[`text-${category}`]"
            v-text="hero"
          ></p>
        </div>
        <div class="row-span-full flex-none w-20 col-start-4" />
      </div>
      <div
        class="border-[128px] border-r-transparent border-r-[80px] absolute inset-0 box-border h-0 z-[-1]"
        :class="[
          {
            'border-fantasy-dark': category === 'fantasy',
            'border-horror-dark': category === 'horror',
            'border-scifi-dark': category === 'scifi',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { default: '', type: String },
    hero: { default: '', type: String },
    title: { default: '', type: String },
    quote: { default: '', type: String },
    order: { default: 0, type: Number },
  },
}
</script>
<style>
.boder-horror-dark {
  @apply border-horror-dark;
}
.border-fantasy-dark {
  @apply border-fantasy-dark;
}
.border-scify-dark {
  @apply border-scifi-dark;
}
</style>
