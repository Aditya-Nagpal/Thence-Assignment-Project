import React from 'react'
import styled from 'styled-components'
import "@fontsource/covered-by-your-grace"
import "@fontsource/manrope"

export default function IntroSubTitles({text1,text2}) {
  return (
    <Container>
        <header>
            <p>{text1}</p>
            <p>{text2}</p>
      </header>
    </Container>
  )
}

const Container=styled.div`
    header{
        text-align: center;
        width: 588px;
        p:first-child{
            margin: 0 0 16px;
            font-family: Covered By Your Grace;
            color: #2DA950;
            font-size: 36px;
            line-height: 110%;
            letter-spacing: -0.02em;
            text-transform: capitalize;
        }
        p:nth-child(2) {
            margin: 0;
            font-family: Manrope;
            font-weight: 600;
            font-size: 56px;
            line-height: 120%;
            letter-spacing: -0.02em;
        }
    }
`;
