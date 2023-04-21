import type { Plugin } from 'vue'
import { createI18n } from 'vue-i18n'

import { en, uk } from './translations'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    },
    uk: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    }
  },

  messages: {
    ...en,
    ...uk
  }
})

const I18nPlugin: Plugin = {
  install: (app) => {
    app.use(i18n)
  }
}

export {
  i18n,
  I18nPlugin
}
