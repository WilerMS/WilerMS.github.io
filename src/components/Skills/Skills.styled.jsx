import styled from "styled-components"

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