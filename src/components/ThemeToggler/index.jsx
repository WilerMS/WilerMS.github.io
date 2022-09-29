import React from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'
import { useThemeContext } from '@context/theme.context'
import styled from 'styled-components' 

import * as constants from '@src/constants/styles.constants'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${constants.FONT_SIZES.md};
    cursor: pointer;
`

const ThemeToggler = () => {

  const { theme, setTheme } = useThemeContext()

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Container onClick={onClick}>
      {theme === 'light' ? <TbMoon /> : <TbSun />}
    </Container>
  )
}

export default ThemeToggler