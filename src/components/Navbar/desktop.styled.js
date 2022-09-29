import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.section`
  width: 100%;
  height: ${constants.DESKTOP_NAVBAR_HEIGHT};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.navbar_desktop_bg};
  transition: ${props => props.theme.transition};

  /* box-shadow: ${props => props.theme.navbar_shadow}; */

  a, svg, span {
    color: ${props => props.theme.navbar_text_color};
  }
`

export const Navbar = styled.div`
  width: ${constants.WRAPPER_WIDTHS.lg};
  max-width: ${constants.MAX_WIDTH};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-items {
    display: flex;
    gap: 30px;
  }
`

export const NavItem = styled.a`
  color: #272A23;
  opacity: .95;
`

export const NavLogo = styled.a`
  font-size: ${constants.FONT_SIZES.md};
  color: #565656;

`