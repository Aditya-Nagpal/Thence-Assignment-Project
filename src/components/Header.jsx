import React, { useEffect } from 'react'
import styled from 'styled-components'
import brunelLogo from '../assets/images/brunel logo.png'
import Close from '../assets/images/Close.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate();

  const navigateHome=() => {
    navigate('/', {replace: true});
  };

  useEffect(() => {
    if(window.location.pathname === '/success-page'){
      document.getElementById('close-button').style.display='none';
    }
  },[]);

  return (
    <Container>
        <img src={brunelLogo} alt="Brunel" width={121} height={30} />
        <button id='close-button'><img src={Close} alt="close" width={32} height={32} onClick={navigateHome} /></button>
    </Container>
  )
}

const Container=styled.div`
    padding: 31.89px 52.22px 0;
    display: flex;
    justify-content: space-between;
    button {
        height: 64px;
        width: 64px;
        background-color: white;
        border: 1px solid #CACACA;
        padding: 16px;
        border-radius: 50%;
        cursor: pointer;
    }
`;
