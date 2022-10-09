import styled from "styled-components"
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    .skills-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        span {
            font-size: 1.1.rem;
            color: ${props => props.theme.page_text_secondary_color}
        }

        @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
            margin: 0px 0 40px 0;
        }
    }

    .skills-content {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;

        @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
            grid-template-columns: 1fr;
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