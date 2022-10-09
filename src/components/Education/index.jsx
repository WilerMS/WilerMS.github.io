import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Styled from './Education.styled'
import { education, certifications } from '@src/constants/contents.constants'

const Education = () => {

  const { t } = useTranslation()

  return (
    <Styled.Wrapper>
      <div className='education-header'>
        <span>{t("")}</span>
      </div>
      <div className='education-content'>
        <Styled.EducationBox>
          {education.map(({ title, school, dates }) => (
            <Styled.EducationItem>
              <div className="title">{t(title)}</div>
              <div className="desription">{t(school)}</div>
              <div className="date">{t(dates)}</div>
            </Styled.EducationItem>

          ))}
        </Styled.EducationBox>
        <Styled.EducationBox>
          {certifications.map(({ title, school, dates }) => (
            <Styled.EducationItem>
              <div className="title">{t(title)}</div>
              <div className="desription">{t(school)}</div>
              <div className="date">{t(dates)}</div>
            </Styled.EducationItem>

          ))}

        </Styled.EducationBox>
      </div>
    </Styled.Wrapper>
  )
}

export default Education