
import React, { createContext, useContext } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import { ThemeProvider } from 'styled-components'
import * as themeConstants from '@src/constants/darkmode.constants'

const ThemeContext = createContext()

export const ContextThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      <ThemeProvider theme={themeConstants.theme[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)