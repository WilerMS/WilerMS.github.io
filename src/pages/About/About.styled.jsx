import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - ${constants.DESKTOP_NAVBAR_HEIGHT});
    /* padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT} + 350px); */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 100px;

    @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
       
    }

    .layout {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            width: ${constants.WRAPPER_WIDTHS.sm};
        }
    }

    .about {
        min-height: 470px;
        max-width: ${constants.MAX_WIDTH};
        width: ${constants.WRAPPER_WIDTHS.lg};
        background: ${props => props.theme.page_bg};
        box-shadow: 0px -15px 7px -2px #0000000f;
        border-radius: 100px;
        box-shadow:  0px 15px 36px -9px rgba(0,0,0,0.42);
        margin-top: -135px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        transition: margin .5s ease;

        &-h1 {
            margin: 25px 0;
            font-size: ${constants.FONT_SIZES.xxl};
            transition: margin .5s ease;
        }

        &.active {
            margin-top: 0;
        }

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            display: none;
        }

        @media (max-width: ${constants.MEDIA_QUERIES.md}px) {

            h2 {
                text-align: left;
            }

            .social {
                justify-content: center;
            }
        }
    }
`

export const Me = styled.div`
    background: none;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;

    @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
        flex-direction: column;
        align-items: center;
    }

    .me {
        &-content {
            opacity: .95;
            height: 100%;
            width: calc(95% - 400px);
            display: flex;
            flex-direction: column;
            gap: 10px;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                width: 100%;
                text-align: center;
            }   

            h2 {
                font-size: 1.3rem;

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 1.2rem;
                }  
            }

            span {
                font-size: 1rem;
                text-align: justify;

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 1rem;
                }
            }

        }
        &-img {
            width: 250px;
            height: 250px;
            overflow: hidden;
            border-radius: 20%; 

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 40%;
            }

        }
    }
`