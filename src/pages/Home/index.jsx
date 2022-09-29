import React from 'react'
import * as Styled from '@pages/Home/Home.styled'
import wallpaper from '@static/wallpaper.svg'
import { useTranslation } from 'react-i18next';

export const Home = ({ id }) => {

  const { t } = useTranslation();

  return (
    <Styled.Wrapper id={id}>
      <div className='layout'>
        <div className="layout-title">
          <h2>{t("Hello, I'm Wiler Mariñez")}</h2>
          <span>{t('Software engineer specialized in Full Stack development')}</span>
        </div>
        <div className="layout-img">

        </div>
      </div>
      <div className='wallpaper'>
        <img src={wallpaper} alt="wallpaper" />
      </div>
    </Styled.Wrapper>
  )
}