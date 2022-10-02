import styled from 'styled-components'

export const RootWrapper = styled.div`
    background: ${props => props.theme.page_bg};
    transition: ${props => props.theme.transition};
    width: 100%;

    * {
        color: ${props => props.theme.page_text_color};
    }

    .out {
        opacity: 0;
        transition: opacity 1s ease;
    }

    .in {
        opacity: 1;
        transition: opacity 1s ease;
    }
`