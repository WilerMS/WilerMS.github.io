import React from 'react'
import styled from 'styled-components'
import { useLanguageContext } from '@context/language.context'

import es from '@static/es.svg'
import en from '@static/en.svg'

const Container = styled.div`
    width: 70px;
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;

    .switch {
      position: absolute;
      width: 60px;
      height: 30px;
      background: ${props => props.theme.toogle_lang_bg};
      border-radius: 35px;
      display: flex;
      align-items: center;
      padding: 0 2.5px;
      cursor: pointer;
    }

    .slider {
      width: 25px;
      height: 25px;
      background: ${props => props.theme.toogle_lang_slider};
      border-radius: 50%;
      transition: left .2s ease;
      position: absolute;
      left: ${props => props.lang === 'es' ? '30px' : '2.5px'};
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        height: 100%;
        position: absolute;
      }

      &:after {
        content:  "${props => props.lang}";
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        color: black;
      }
    }
`

const ToggleLanguage = () => {

  const {lang, setLang} = useLanguageContext()

  return (
    <Container lang={lang}>
      <div className="switch" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
        <div className="slider">
          <img src={lang === 'es' ? es : en} alt={lang} />
        </div>
      </div>
    </Container>
  )
}

export default ToggleLanguage