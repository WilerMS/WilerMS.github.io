import React from 'react'
import * as Styled from '@pages/Home/Home.styled'
import { useTranslation } from 'react-i18next'
import TrackVisibility from 'react-on-screen'

import Particles from '@components/Particles'
import homeLogo from '@static/home_logo.svg'


export const Home = ({ id }) => {

  const { t } = useTranslation();

  return (
    <Styled.Wrapper id={id}>
      <div className='layout'>
        <div className="layout-title">
          <TrackVisibility>
            {({ isVisible }) => <>
              <h2 className={isVisible ? 'in' : 'out'}>{t("Hello, I am Wiler!")}</h2>
              <span className={isVisible ? 'in' : 'out'}>{t('Software engineer specialized in Full Stack development')}</span>
              <a href="#ed" className={isVisible ? 'in' : 'out'}>{t('Mi CV')}</a>
            </>}
          </TrackVisibility>
        </div>
        <div className="layout-img">
          <TrackVisibility>
            {({ isVisible }) => <>
              <img className={isVisible ? 'in' : 'out'} src={homeLogo} alt="wallpaper" />
            </>}
          </TrackVisibility>
          
        </div>
      </div>
      <Particles />
    </Styled.Wrapper>
  )
}