<template>
  <popup title="Vuoi rimanere aggiornato?">
    <template #trigger="{ open }">
      <div
        class="px-4 py-2 bg-transparent border border-white rounded-full cursor-pointer hover:bg-white hover:text-brand-dark"
        @click="open"
      >
        <svg class="inline-block h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
          />
        </svg>
        Resta aggiornato
      </div>
    </template>
    <template #default>
      <div class="p-4 text-gray-800">
        <p class="my-4">
          <span class="font-bold">Lasciaci la tua email:</span><br />
          ti faremo sapere noi quando sarà il momento di unirsi al
          crowdfunding!<br />
          <span class="italic"
            >(Stai tranquillo, la useremo solo per questo!)</span
          >
        </p>
        <form
          id="mc-embedded-subscribe-form"
          class="validate"
          name="mc-embedded-subscribe-form"
          action="https://collanatrivio.us2.list-manage.com/subscribe/post?u=08f3caef8876bd84d5b2e23e7&amp;id=c5cd88e3c5"
          method="post"
          target="_blank"
          novalidate
          @sumbit="modal = false"
        >
          <div
            id="mc_embed_signup_scroll"
            class="flex items-center justify-between"
          >
            <input
              id="mce-EMAIL"
              class="inline px-2 py-1 pr-6 border rounded-full border-brand-dark"
              name="EMAIL"
              type="email"
              value
              placeholder="indirizzo email"
              required
            />
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div aria-hidden="true" style="position: absolute; left: -5000px">
              <input
                name="b_08f3caef8876bd84d5b2e23e7_c5cd88e3c5"
                type="text"
                value
                tabindex="-1"
              />
            </div>

            <button
              id="mc-embedded-subscribe"
              name="subscribe"
              type="submit"
              value="Subscribe"
            >
              <svg class="h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </template>
  </popup>
</template>
