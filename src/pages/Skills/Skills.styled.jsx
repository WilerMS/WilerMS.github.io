import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - ${constants.DESKTOP_NAVBAR_HEIGHT});
    padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT});
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};

        @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
            width: ${constants.WRAPPER_WIDTHS.sm};
        }

        &-header {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 100px 0 40px 0;

            h1 {
                font-size: ${constants.FONT_SIZES.xxl};
            }

            span {
                color: ${props => props.theme.page_text_secondary_color}
            }

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                margin: 0px 0 40px 0;
            }
        }

        &-content {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 70px;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
            grid-template-columns: 1fr;
            }
        }
    }
`

export const SkillsPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .skills-panel {
        &-header {
            padding: 20px;
        }
        &-body {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            row-gap: 50px;
        }
    }
`

export const SkillItem = styled.div`
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .skills-item {
        &-icon {
            width: 112px;
            height: 112px;
            padding: 20px;
            background: ${props => props.theme.skillsIcon};
            border-radius: 5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        &-title {
            height: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5px;
        }
    }
`