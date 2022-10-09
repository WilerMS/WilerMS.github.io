import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Styled from './WorkExperience.styled'
import { work } from '@src/constants/contents.constants'

const WorkExperience = () => {

  const { t } = useTranslation()

  return (
    <Styled.Wrapper>
      <div className='work-experience-header'>
        <span>{t('A lo largo de mi carrera profesional he tenido la suerte de trabajar con distintas empresas, estas me aportarlo la experiencia necesaria para un buen desempeño laboral. A continuación, expondré los más importantes:')}</span>
      </div>
      <div className='work-experience-content'>
        <Styled.WorkBox>
          {work.map(({ title, company, description,  dates }) => (
            <Styled.WorkItem>
              <div className="title">{t(title)}</div>
              <div className="description">{t(company)}</div>
              <div className="sub-description">{t(description)}</div>
              <div className="date">{t(dates)}</div>
            </Styled.WorkItem>

          ))}
        </Styled.WorkBox>
      </div>
    </Styled.Wrapper>

  )
}

export default WorkExperience