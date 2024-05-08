import React from 'react'
import styled from 'styled-components'
import "@fontsource/manrope"
import brunelLogo from '../../assets/images/brunel logo.png'

export default function HomeHeader() {
  return (
    <Container>
        <header>
            <img src={brunelLogo} alt='Brunel' width={121} height={30} />
            <div>
                <button type='button'>get projects</button>
                <button type='button'>onboard talent</button>
            </div>
        </header>
    </Container>
  )
}

const Container=styled.div`
    margin: 24px 24px 79px;
    header {
        border: 1px solid #EAEAEA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 65.28px;
        padding: 16.97px 20.89px 16.97px 52.22px; 
        div {
            display: flex;
            button {
                padding: 26.11px 41.78px;
                font-size: 18px;
                text-transform: capitalize;
                font-family: Manrope;
                border-radius: 107.06px;
                border: 1px solid #EAEAEA;
            }
            button:first-child {
                background-color: white;
                margin-right: 15px;
                color: #1C1C1C;
            },
            button:nth-child(2) {
                background-color: #1C1C1C;
                color: white;
            }
        }
    }
`
