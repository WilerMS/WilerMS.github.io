import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.section`
  z-index: 100;
  width: 100%;
  height: ${constants.MOBILE_NAVBAR.WRAPPER_HEIGHT};
  position: fixed;
  bottom: ${constants.MOBILE_NAVBAR.BOTTOM_SPACE};
  display: flex;
  justify-content: center;

  * {
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
`

export const Navbar = styled.div`
  background: ${props => props.theme.navbar_bg};
  color: white;
  width: 90%;
  max-width: ${constants.MOBILE_NAVBAR.MAX_WIDTH};
  height: ${constants.MOBILE_NAVBAR.HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: ${constants.MOBILE_NAVBAR.RADIUS};
  z-index: 100;
  box-shadow: ${props => props.theme.navbar_shadow};
  -webkit-box-shadow: ${props => props.theme.navbar_shadow};
  -moz-box-shadow: ${props => props.theme.navbar_shadow};

  .navbar-items {
    display: flex;
    gap: 30px;
  }
  
  a, svg, span {
    color: ${props => props.theme.navbar_text_color};
  }
`

export const NavbarList = styled.div`
  z-index: 100;
  position: absolute;
  width: 90%;
  background: ${props => props.theme.navbar_bg};
  height: ${ props => (
    props.isExpanded ? 
      constants.MOBILE_NAVBAR.NAVLIST_HEIGHT 
      :
      0
  )};
  opacity: ${ props => props.isExpanded ? 1 : 0};
  transition: height .3s ease, opacity .3s ease;
  border-radius: ${constants.MOBILE_NAVBAR.RADIUS};
  bottom: 0;
  gap: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  box-shadow: ${props => props.theme.navbar_shadow};
  -webkit-box-shadow: ${props => props.theme.navbar_shadow};
  -moz-box-shadow: ${props => props.theme.navbar_shadow};

  .navbar-items {
    width: 100%;
    height: calc(100% - 80px);
    padding: 20px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

  .navbar-close {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: ${constants.MOBILE_NAVBAR.HEIGHT};
  }

  a, svg, span {
    color: ${props => props.theme.navbar_text_color};
  }

`

export const NavItem = styled.a`
  opacity: .95;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  svg {
    font-size: 25px;
    margin-top: ${ props => props.noMarginTop ? '0px' : '15px'};
  }
  span  {
    font-size: 14px;
  }

  &:hover {
    opacity: 1;
    font-weight: bold;
  }
`

export const NavLogo = styled.a`
  user-select: none;
  font-size: ${constants.FONT_SIZES.md};
  color: #272A23;
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${constants.FONT_SIZES.md};
    cursor: pointer;
`