<template>
  <div class="bg-brand-dark flex items-center flex-1 h-full text-white">
    <!-- <div class="bg-brand-dark flex p-6 text-3xl text-center">
      <div class="flex-1" />
      <div class="logo flex-1">
        <Logo class="h-32 mx-auto" />
      </div>
      <div class="flex-1" />
    </div> -->
    <!-- <div class="grid h-full grid-cols-3 gap-6 px-6 text-3xl text-center">
      <div
        class="bg-gradient-to-b from-scifi-dark via-scifi-light to-scifi-dark h-56 p-6"
      ></div>
      <div
        class="bg-gradient-to-b from-fantasy-dark via-fantasy-light to-fantasy-dark h-56 p-6"
      ></div>
      <div
        class="bg-gradient-to-b from-horror-dark via-horror-light to-horror-dark h-56 p-6"
      ></div>
    </div> -->
    <div class="container flex w-full p-4 mx-auto">
      <div
        class="border-brand-light rounded-xl animate-pulse inline-block w-auto max-w-md mx-auto border-4 border-double cursor-pointer"
      >
        <img src="Copertina.jpeg" class="rounded-xl h-full mx-auto" />
      </div>
      <div class="md:flex flex-1 hidden gap-4 my-10">
        <div
          v-if="false"
          class="bg-gradient-to-b from-scifi-dark via-scifi-light to-scifi-dark rounded-r-2xl w-md self-start flex-1 h-64 p-6 bg-opacity-75"
        ></div>
        <div
          v-if="false"
          class="bg-gradient-to-b from-fantasy-dark via-fantasy-light to-fantasy-dark rounded-r-2xl w-md self-center flex-1 h-64 p-6 bg-opacity-75"
        ></div>
        <div
          v-if="true"
          class="bg-gradient-to-b from-horror-dark via-horror-light to-horror-dark rounded-r-2xl w-md self-end flex-1 h-64 p-6 bg-opacity-75"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'void',
}
</script>
