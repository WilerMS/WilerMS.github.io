import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh);
    padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT});
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;

    flex-direction: column;

    .wallpaper {
        width: 70%;
        max-width: 1000px;
        position: absolute;
        bottom: 0;
        display: flex;

        @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
            bottom: calc(${constants.MOBILE_NAVBAR.HEIGHT} * 1.5 );
        }

        img {
            width: 100%;
        }
    }

    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            width: ${constants.WRAPPER_WIDTHS.sm};
        }

        &-title {
            text-align: center;
            margin-top: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            
            h2 {
                font-weight: 400;
                font-size: 4rem;

                @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                    font-size: 3rem;
                }
            }
        }
    }
`