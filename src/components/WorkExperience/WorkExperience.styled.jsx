import styled from 'styled-components'
import * as constants from '@src/constants/styles.constants'


export const Wrapper = styled.div` 

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .work-experience {

        &-header {
            margin-top: 25px;
        }

        &-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }


    }

`

export const Company = styled.div`
    background: ${props => props.color};
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    overflow: hidden;
    transition: transform .5s ease;

    .img {
        width: 60%;
        height: 60%;
        object-fit: contain;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .title {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000000b3;
        transform: translateY(150px);
        opacity: 0;
        transition: transform .5s ease, opacity .5s ease;
    }

    &:hover {
        transform: scale(1.1);
        .title {
            transform: translateY(0);
            opacity: 1;
        }
    }
`
