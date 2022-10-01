import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.section`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: ${props => props.isBgActive ? constants.DESKTOP_NAVBAR_HEIGHT : '160px'};
  top: 0;
  display: flex;
  justify-content: center;
  background: ${props => props.isBgActive ? props.theme.navbar_desktop_bg : 'none'};
  transition: ${props => props.theme.transition}, height .5s ease;

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
    align-items: center;
    gap: 50px;
  }


`

export const NavItem = styled.a`
  color: #272A23;
  font-size: 20px;
  opacity: .6;

  @media (max-width: ${constants.MEDIA_QUERIES.lg}px) {
      font-size: 16px;
  }

  &.selected {
    opacity: 1;
  }
`

export const NavLogo = styled.a`
  font-size: ${constants.FONT_SIZES.xl};
  color: #565656;

  @media (max-width: ${constants.MEDIA_QUERIES.lg}px) {
      font-size: ${constants.FONT_SIZES.lg};
  }

`