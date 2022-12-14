import React from 'react'
import { ContextThemeProvider } from '@context/theme.context'
import { ContextLanguageProvider } from '@context/language.context'
import Navbar from '@components/Navbar'
import { RootWrapper } from '@components/Wrappers'
import { pages } from '@src/constants/contents.constants'

const App = () => {

  return (
    <ContextThemeProvider>
      <ContextLanguageProvider>
        <RootWrapper>
          <Navbar />
          {pages.map(({ Component, id }) => (
            <Component
              key={id}
              id={id}
            />
          ))}
        </RootWrapper>
      </ContextLanguageProvider>
    </ContextThemeProvider>
  )
}

export default App