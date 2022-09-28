import React, { createContext, useContext } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import { I18nextProvider } from 'react-i18next'
import i18n from '@src/translations/i18next'

const LanguageContext = createContext()

export const ContextLanguageProvider = ({ children }) => {

  const [lang, setLang] = useLocalStorage('lang', 'en')

  i18n.changeLanguage(lang)

  return (
    <LanguageContext.Provider
      value={{ lang, setLang }}
    >
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)