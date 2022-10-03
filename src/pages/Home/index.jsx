import React, { useEffect, useState } from 'react'
import * as Styled from '@pages/Home/Home.styled'
import { useTranslation } from 'react-i18next'
import TrackVisibility from 'react-on-screen'

import Particles from '@components/Particles'
import { astronauts } from '@src/constants/contents.constants'
import homelogo from '@static/astronaut_1.svg'


export const Home = ({ id }) => {

  const { t } = useTranslation();
  const [astronaut, setAstronaut] = useState(homelogo)

  useEffect(() => {
    const astronautIndex = Math.floor(Math.random() * 7.9)
    const img = astronauts[astronautIndex]?.img
    setAstronaut(img || homelogo)
  }, [])

  return (
    <Styled.Wrapper id={id}>
      <div className='layout'>
        <div className="layout-title">
          <TrackVisibility>
            {({ isVisible }) => <>
              <h2 className={isVisible ? 'in' : 'out'}>
                {t("Hello, I am Wiler!")}
                <div className='hi'>👋</div>
              </h2>
              <span className={isVisible ? 'in' : 'out'}>{t('Software engineer specialized in Full Stack development')}</span>
              <a href="#ed" className={isVisible ? 'in' : 'out'}>{t('Mi CV')}</a>
            </>}
          </TrackVisibility>
        </div>
        <div className="layout-img">
          <TrackVisibility>
            {({ isVisible }) => <>
              <img className={isVisible ? 'in' : 'out'} src={astronaut} alt="wallpaper" />
            </>}
          </TrackVisibility>

        </div>
      </div>
      <Particles />
    </Styled.Wrapper>
  )
}