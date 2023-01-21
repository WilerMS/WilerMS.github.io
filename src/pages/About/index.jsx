import React, { useEffect, useState } from 'react'
import * as Styled from '@src/pages/About/About.styled'
import { useTranslation } from 'react-i18next'
import Tabs from '@components/Tabs'
import Colaborations from '@components/Collaborations'
import WorkExperience from '@components/WorkExperience'
import Education from '@components/Education'

import { Skills } from '@components/Skills'

import { MdWork } from 'react-icons/md'
import { IoIosPeople, IoIosSchool } from 'react-icons/io'
import { SiCodeforces } from 'react-icons/si'

import profile from '@static/profile_1.jpg'
import Social from '@src/components/Social'

export const About = ({ id }) => {

  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 550)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const tabs = [
    { name: t('Work experience'), Icon: MdWork, Component: WorkExperience },
    { name: t('Education'), Icon: IoIosSchool, Component: Education },
    { name: t('Skills'), Icon: SiCodeforces, Component: Skills },
    { name: t('Collaborations'), Icon: IoIosPeople, Component: Colaborations },
  ]

  return (
    <Styled.Wrapper className={scrolled ? 'active' : ''} id={id}>
      <div className={`about ${scrolled ? 'active' : ''}`}>
        <h2 className='about-h1'>{t('About me')}</h2>
        <Styled.Me>
          <div className="me-img">
            <img src={profile} alt="" />
          </div>
          <div className="me-content">
            <h2>{t("I am Wiler Mariñez, a software engineer especialized in fullstack development")}.</h2>
            <span>{t("I'm a young pasionate about new technologies based in Madrid (Spain).")}</span>
            <span>{t('since a child')}</span>
            <span>{t('about me 4')}</span>
            <Social />
          </div>
        </Styled.Me>
      </div>
      <div className="layout">
        <Tabs tabs={tabs} />
      </div>
    </Styled.Wrapper>
  )
}