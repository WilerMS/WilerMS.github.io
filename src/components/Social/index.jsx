import React from 'react'
import styled from 'styled-components'

import { FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'

import * as constants from '@src/constants/styles.constants'

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: ${constants.MEDIA_QUERIES.sm}px) {
        justify-content: space-between;
    } 
`

const Link = styled.a`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    border-radius: 50%;
    font-size: 2rem;

    svg {
        transition: color .5s ease;
    }

    &:hover {
        svg {
            color: ${props => props.color};
        }
    }
`

const Social = () => {
    return (
        <Container>
            <Link href="google.com" color='#3498DB'>
                <RiLinkedinFill />
            </Link>
            <Link href="google.com" color='#E74C3C'>
                <FaYoutube />
            </Link>
            <Link href="google.com" color='#85C1E9 '>
                <FaFacebookF />
            </Link>
            <Link href="google.com" color='#3498DB'>
                <FaTwitter />
            </Link>
            <Link href="google.com" color='#8E44AD'>
                <RiInstagramFill />
            </Link>
        </Container>
    )
}

export default Social