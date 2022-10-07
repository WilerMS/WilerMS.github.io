import React, { useEffect, useState } from 'react'
import useWindowsDimensions from '@hooks/useWindowsDimensions'
import { MEDIA_QUERIES } from '@src/constants/styles.constants'
import * as Desktop from '@components/Navbar/desktop.styled'
import * as Mobile from '@components/Navbar/mobile.styled'
/* import ThemeToggler from '@components/ThemeToggler' */
import LangToggler from '@components/LangToggler'

import { FaRegTimesCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { pages } from '@src/constants/contents.constants'
import { useTranslation } from 'react-i18next'

const DeskTopNavbar = () => {

  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <Desktop.Wrapper isBgActive={scrolled} className='navbar-section'>
      <Desktop.Navbar className='navbar'>
        <div className='navbar-logo'>
          <Desktop.NavLogo 
            href='#home'
            onClick={() => setActiveLink('home')}
          >
            Wiler Mariñez
          </Desktop.NavLogo>
        </div>
        <nav className='navbar-items'>
          {pages.map(({ href, text, id }) => (
            <Desktop.NavItem 
              key={text}
              href={href}
              className={activeLink === id ? 'selected' : ''}
              onClick={() => setActiveLink(id)}
            >
              {t(text)}
            </Desktop.NavItem>
          ))}
          {/* <ThemeToggler /> */}
          <LangToggler />
        </nav>
      </Desktop.Navbar>
    </Desktop.Wrapper>
  )
}

const MobileNavbar = () => {

  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Mobile.Wrapper className='navbar-section'>
      <Mobile.Navbar className='navbar'>
        <nav className='navbar-items'>
          <Mobile.NavMenu
            onClick={() => setIsExpanded(true)}
          >
            <HiMenu />
          </Mobile.NavMenu>
        </nav>
      </Mobile.Navbar>
      <Mobile.NavbarList isExpanded={isExpanded}>
        <div className='navbar-items'>
          {pages.map(({ href, text, Icon }) => (
            <Mobile.NavItem
              key={text}
              href={href}
              onClick={() => setIsExpanded(false)}
            >
              <Icon />
              <span>{t(text)}</span>
            </Mobile.NavItem>
          ))}
        </div>
        <div className='navbar-close'>
          <LangToggler />
          <Mobile.NavItem
            noMarginTop
            onClick={() => setIsExpanded(false)}
          >
            <FaRegTimesCircle />
          </Mobile.NavItem>
        </div>
      </Mobile.NavbarList>
    </Mobile.Wrapper>
  )
}

const Navbar = () => {
  const { width } = useWindowsDimensions()
  return (
    <>
      {width > MEDIA_QUERIES.md ?
        <DeskTopNavbar />
        :
        <MobileNavbar />
      }
    </>
  )
}

export default Navbar