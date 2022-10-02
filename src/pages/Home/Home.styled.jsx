import styled, { keyframes } from 'styled-components'
import * as constants from '@src/constants/styles.constants'

const animation = keyframes`
    0% {
        transform: translateY(0);
    } 
    50% {
        transform: translateY(30px);
    }
    100% {
        transform: translateY(0);
    }
`

export const Wrapper = styled.div`
    background: url(${props => props.theme.home_background});
    background-size: cover;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
    width: 100%;
    min-height: calc(100vh);
    padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT});
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .layout {
        display: flex;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};
        height: 50vh;
        margin-bottom: 200px;
        z-index: 3;

        @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
            width: ${constants.WRAPPER_WIDTHS.sm};
            flex-direction: column;
        }

        &-title {
            width: 60%;
            text-align: center;
            

            > div {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            
            h2 {
                font-size: 5rem;

                @media (max-width: ${constants.MEDIA_QUERIES.lg}px) {
                    font-size: 2rem;
                }

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 3rem;
                }
            }

            a {
                margin-top: 50px;
                background: linear-gradient(90.21deg,rgba(170,54,124,.5) -5.91%,rgba(74,47,189,.5) 111.58%);
                padding: 15px;
                border: 1px solid hsla(0,0%,100%,.2);
                border-radius: 2px;
                transition: background .5s ease;
                text-transform: uppercase;
                color: white;

                &:hover {
                    background: linear-gradient(90.21deg,#8b2b655b -5.91%,#301f7d57 111.58%);
                }
            }

        }

        &-img {
            width: 40%;
            animation: ${animation} 5s ease infinite;

            img {
                width: 100%;
            }

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                margin-top: 40px;
            }

            @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                img { display: none;}
            }
        }
    }
`