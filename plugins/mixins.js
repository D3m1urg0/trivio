import Vue from 'vue'
// import accounting from 'accounting-js'

// import * as signalR from '~aspnet/signalr'

Vue.mixin({
  head() {
    const theHead = this.page
      ? {
          title: this.page.title,
          meta: [
            { hid: 'og:title', name: 'og:title', content: this.page.title },
            {
              hid: 'og:description',
              name: 'og:description',
              content: this.page.description,
            },
            {
              hid: 'description',
              name: 'description',
              content: this.page.description,
            },
            {
              hid: 'keywords',
              name: 'keywords',
              content: this.page.keywords,
            },
          ],
        }
      : null

    return theHead
  },
})
