import React from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import styled from 'styled-components'

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
        "particles": {
          "number": {
            "value": 20,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "retina_detect": true
      }}
    />
  )
}

export default _Particles