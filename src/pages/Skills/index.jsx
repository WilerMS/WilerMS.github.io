import React, { useEffect, useState } from 'react'
import * as Styled from '@pages/Skills/Skills.styled'
import { skills } from '@src/constants/contents.constants'
import { useTranslation } from 'react-i18next'

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

export const Skills = ({ id }) => {

  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


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
            <h2>I am Wiler Mariñez, a software engineer especialized in fullstack development.</h2>
            <span>I'm a young pasionate about new technologies based in Madrid (Spain).</span>
            <span>Desde niño siempre he sido curioso, lo que me llevó a aprender sobre bastantes areas. Entre ellas producción y edición de música y audio, diseño gráfico, retoque fotográfico y edición de vídeo a nivel profesional.</span>
            <span>Hace 5 años me embarqué en el mundo de la programación, quedando encantado y haciendolo mi profesión y mi estilo de vida.</span>
            <Social />
          </div>
        </Styled.Me>
        {/* <div className='layout-header'>
          <h1>{t('Skills')}</h1>
          <span>{t('My favourite skills')}</span>
        </div>
        <div className='layout-content'>
          {skills.map(type => (
            <SkillPanel key={type.name} skills={type} />
          ))}
        </div> */}
      </div>
    </Styled.Wrapper>
  )
}