// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'EGGY PAY',
      meta: [
          { charset: 'utf-8'},
          { name: 'viewport', content: 'width=device-width, initial-scale=1'},
          { hid: 'description', name: 'description', content: 'NUXT meta'},
          { name: 'format-detection', content: 'cellphone-no'}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.icon'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.7.0.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },
      ],
    }
  } 
})
