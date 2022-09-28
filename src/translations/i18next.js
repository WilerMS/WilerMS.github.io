import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './es.json'
import en from './en.json'

const translation = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: translation,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n