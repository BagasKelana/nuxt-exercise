// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#191A1C',
    surface: '#242424',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#fb8c00',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customDarkTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
