import styled from "styled-components"
import * as constants from '@src/constants/styles.constants'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .education {

        &-header {
            /* margin-top: 25px; */
        }

        &-content {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 30px;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }


    }
`

export const WorkBox = styled.div`
    width: 100%;
    gap: 30px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const WorkItem= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title{
        font-size: 1.4rem;
        font-weight: bold;
    }

    .sub-description, .description, .date {
        opacity: .9;
    }
`