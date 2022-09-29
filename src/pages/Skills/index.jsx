import React from 'react'
import * as Styled from '@pages/Skills/Skills.styled'
import { skills } from '@src/constants/contents.constants'
import { useTranslation } from 'react-i18next'

const SkillPanel = ({ skills }) => {

  const { t } = useTranslation();

  console.log({ skills })

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

  const { t } = useTranslation();

  return (
    <Styled.Wrapper id={id}>
      <div className="layout">
        <div className='layout-header'>
          <h1>{t('Skills')}</h1>
          <span>{t('My favourite skills')}</span>
        </div>
        <div className='layout-content'>
          {skills.map(type => (
            <SkillPanel key={type.name} skills={type} />
          ))}
        </div>
      </div>
    </Styled.Wrapper>
  )
}