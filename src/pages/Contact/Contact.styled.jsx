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

export const ContactForm = styled.div`
   display : grid;
   grid-template-areas: "name name""email phone""message message""send send";
   width: 70%;
   gap: 30px;

    @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
        grid-template-areas: "name""email""phone""message""send";
        width: 100%;
    }

   > div {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        position: relative;

        &.error {
            border: 1px solid red;

            .error {
                position: absolute;
                font-size: 0.75em;
                left: 30px;
                bottom: 10px;
                color: #a80000;
            }
        }

        input:focus ~ label, 
        textarea:focus ~ label, 
        input:valid ~ label, 
        textarea:valid ~ label {
            font-size: 0.75em;
            color: #999;
            top: -5px;
            -webkit-transition: all 0.225s ease;
            transition: all 0.225s ease;
        }

        label {
            color: #999;
            padding: 1.3rem 30px 1rem 30px;
            position: absolute;
            left: 0;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
            pointer-events: none;
        }

        input,
        textarea {
            padding: 30px;
            border: 0;
            width: 100%;
            height: 100%;
            font-size: 1rem;
            background-color: #242729;
            color: white;
            border-radius: 4px;
            outline: none;
        }

   }

   .name {
        grid-area: name;
        height: 100px;
    }

    .email {
        grid-area: email;
        height: 100px;
    }

    .phone {
        grid-area: phone;
        height: 100px;
    }

    .message {
        grid-area: message;

        textarea {
            min-height: 350px;
            resize: none;

            @media (max-width: ${constants.MEDIA_QUERIES.md}px) {
                min-height: 250px;
            }
        }
    }

    .send {
        grid-area: send;
        text-align: center;
        letter-spacing: 1px;
        font-size: 16px;
        border-radius: 6px;
        padding: 14px 32px;
        border: none;
        font-weight: 600;
        background-color: #342a7b;
        color: white;
        cursor: pointer;
        transition: background-color .2s ease;
        height: 70px;
        z-index: 1;
        margin-bottom: 150px;

        &:hover {
            background-color: #0f0c28;
        }
    }
`