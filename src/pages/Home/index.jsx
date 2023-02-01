import React, { useEffect, useState } from 'react'
import * as Styled from '@pages/Home/Home.styled'
import { useTranslation } from 'react-i18next'
import TrackVisibility from 'react-on-screen'
import useWindowsDimensions from '@hooks/useWindowsDimensions'
import * as constants from '@src/constants/styles.constants'

import Particles from '@components/Particles'
import { astronauts } from '@src/constants/contents.constants'
import homelogo from '@static/astronaut_1.svg'
import profile from '@static/profile_1.jpg'
import Social from '@src/components/Social'


export const Home = ({ id }) => {

  const { t } = useTranslation();
  const [astronaut, setAstronaut] = useState(homelogo)
  const { width } = useWindowsDimensions()

  useEffect(() => {
    const astronautIndex = Math.floor(Math.random() * 7.9)
    const img = astronauts[astronautIndex]?.img
    setAstronaut(img || homelogo)
  }, [])

  return (
    <Styled.Wrapper id={id}>
      {width <= constants.MEDIA_QUERIES.sm &&
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="me-img">
              <img className={isVisible ? 'in' : 'out'} src={profile} alt="A portrait of Wiler Marinez" />
            </div>
          )}
       </TrackVisibility>
      }
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
          {width > constants.MEDIA_QUERIES.md &&
            <TrackVisibility>
              {({ isVisible }) => <>
                <img className={isVisible ? 'in' : 'out'} src={astronaut} alt="wallpaper" />
              </>}
            </TrackVisibility>
          }
        </div>
        {width <= constants.MEDIA_QUERIES.sm &&
          <TrackVisibility>
            {({ isVisible }) => (<Social />)}
          </TrackVisibility>
        }
      </div>
      <Particles />
    </Styled.Wrapper>
  )
}