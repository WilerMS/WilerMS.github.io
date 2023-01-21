import styled from "styled-components"
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    padding-top: calc(${constants.DESKTOP_NAVBAR_HEIGHT});
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
        padding-top: 15px;
    }

    .layout {
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;
        width: ${constants.WRAPPER_WIDTHS.lg};
        max-width: ${constants.MAX_WIDTH};
        height: 100%;
    }
`


export const LayoutTitle = styled.div`
    font-size: ${constants.FONT_SIZES.xl};
`