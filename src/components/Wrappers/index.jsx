import styled from 'styled-components'

export const RootWrapper = styled.div`
    background: ${props => props.theme.page_bg};
    transition: ${props => props.theme.transition};
    width: 100%;

    a, svg, p, h1, h2, h3, h4, h5, span {
        color: ${props => props.theme.page_text_color};
    }

    .out {
        transform: translateY(-40px);
        opacity: 0;
        transition: opacity 1s ease;
    }

    .in {
        transform: translateY(0);
        opacity: 1;
        transition: opacity 1s ease, transform 2s ease;
    }
`