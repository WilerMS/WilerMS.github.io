import React, { useEffect, useState } from 'react'
import * as Styled from '@pages/About/Skills.styled'
import { skills, companies } from '@src/constants/contents.constants'
import { useTranslation } from 'react-i18next'
import Tabs from '@components/Tabs'
import Colaborations from '@src/components/Collaborations'

import profile from '@static/profile_1.jpg'
import Social from '@src/components/Social'

const SkillPanel = ({ skills }) => {

  const { t } = useTranslation();

  return (
    <Styled.SkillsPanelContainer>
      <div className='skills-panel-header'>
        <h2>{t(skills.name)}</h2>
      </div>
      <div className='skills-panel-body'>
        {skills.items.map(item => (
          <Styled.SkillItem key={item.title}>
            <div className='skills-item-icon'>
              <img src={item.img} alt={item.title} />
            </div>
            <div className='skills-item-title'>
              <h3>{item.title}</h3>
              <span>{t(item.subtitle)}</span>
            </div>
          </Styled.SkillItem>
        ))}
      </div>
    </Styled.SkillsPanelContainer>
  )
}

const Skills = () => {

  const { t } = useTranslation()
  return (
    <>
      <div className='layout-header'>
        <span>{t('These are some of my favourite skills')}</span>
      </div>
      <div className='layout-content'>
        {skills.map(type => (
          <SkillPanel key={type.name} skills={type} />
        ))}
      </div>
    </>
  )
}

export const About = ({ id }) => {

  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const tabs = [
    { name: t('Work experience'), Component: Colaborations },
    { name: t('Education'), Component: Skills },
    { name: t('Skills'), Component: Skills },
    { name: t('Collaborations'), Component: Colaborations },
  ]

  return (
    <Styled.Wrapper id={id}>
      <div className={`about ${scrolled ? 'active' : ''}`}>
        <h2>{t('About me')}</h2>
      </div>
      <div className="layout">
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
        <Tabs tabs={tabs} />
      </div>
    </Styled.Wrapper>
  )
}