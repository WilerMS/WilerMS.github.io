import React, { useRef } from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import styled from 'styled-components'

import postgresql from '@static/postgresql.svg'
import react from '@static/react.svg'
import nodejs from '@static/nodejs.svg'

const ParticlesJS = styled(Particles)`
  width: 100%;
  position: absolute;
  height: 170%;
  bottom: 0;
  z-index: 0;
`

const _Particles = () => {

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const loadedParticles = () => {
    const canvasElement = document.querySelector('.canvas')
          canvasElement.style.setProperty("position", "absolute", "important")
  }

  return (
    <ParticlesJS
      id="tsparticles"
      init={particlesInit}
      loaded={loadedParticles}
      canvasClassName='canvas'
      params={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#000000"
            },
            image: [
              {
                "src": postgresql,
                "height": 23,
                "width": 23
              },
              {
                "src": react,
                "height": 23,
                "width": 23
              },
              {
                "src": nodejs,
                "height": 23,
                "width": 23
              },
            ]
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 50,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min:0,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false
            },
            onclick: {
              enable: false
            },
            resize: true
          }
        },
        retina_detect: true
      }}
    />
  )
}

export default _Particles