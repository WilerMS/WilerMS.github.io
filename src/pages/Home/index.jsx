import React from 'react'
import * as Styled from '@pages/Home/Home.styled'
import wallpaper from '@static/wallpaper.svg'
import { useTranslation } from 'react-i18next'

import Particles from '@components/Particles'
import homeLogo from '@static/home_logo.svg'


export const Home = ({ id }) => {

  const { t } = useTranslation();

  return (
    <Styled.Wrapper id={id}>
      <div className='layout'>
        <div className="layout-title">
          <h2>{t("Hello, I am Wiler!")}</h2>
          <span>{t('Software engineer specialized in Full Stack development')}</span>
          <a href="#">MY RESUME</a>
        </div>
        <div className="layout-img">
          <img src={homeLogo} alt="wallpaper" />
        </div>
      </div>
    </Styled.Wrapper>
  )
}