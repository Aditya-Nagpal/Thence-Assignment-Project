import React, { useState } from 'react'
import styled from 'styled-components'
import successTick from '../../assets/images/success tick.png'
import IntroSubTitles from '../IntroSubTitles'
import '@fontsource/manrope'
import { useNavigate } from 'react-router-dom'

export default function SuccessSection() {
    const text1='Success Submitted';
    const text2='Congratulations';
    const [second,setSecond]=useState(5);
    const navigate=useNavigate();

    const navigateHome=() => {
        navigate('/', {replace: true});
    };

    const reduceTime=setTimeout(() => {
        setSecond(second-1);
        if(second === 0){
            stopTime();
            navigateHome();
        };
    },1000);

    const stopTime=() => {
        clearTimeout(reduceTime);
    }

  return (
    <Container>
        <img src={successTick} id='success-tick' alt="success" width={66.67} height={66.67} />
        <IntroSubTitles text1={text1} text2={text2} />
        <p className='sub-text'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        <p className='sub-text'>Redirecting you to Homepage in <b>{second} Seconds</b></p>
    </Container>
  )
}

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70.72px;
    #success-tick{
        margin-bottom: 41px;
        padding: 6.67px;
    }
    .sub-text {
        line-height: 130%;
        font-family: Manrope;
        color: #727272;
        text-align: center;
        box-sizing: border-box;
    }
    p:nth-child(3) {
        max-width: 718px;
        font-size: 27px;
        padding: 20px 2px 0;
        margin: 0;
    }
    p:nth-child(4) {
        margin: 154px 0 42px;
        font-size: 20px;
        b {
            color: #1C1C1C;
        }
    }
`;
