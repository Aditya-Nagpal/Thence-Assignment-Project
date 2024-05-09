import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IntroSubTitles from '../IntroSubTitles'
import '@fontsource/manrope'
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function FormSection() {
  const text1="Registration Form";
  const text2="Start your success Journey here!"
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [allFieldsEntered,setAllFieldsEntered]=useState(false);

  useEffect(() => {
    document.getElementById('error-message').style.display='none';
  },[]);

  useEffect(() => {
    if(name && email){setAllFieldsEntered(true);}
    else{setAllFieldsEntered(false);}
  },[name,email]);

  const navigateSuccessPage=() => {
    navigate('/success-page');
  };

  const validateEmail=(email) => {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);  
  };

  const handleNameChange=(e) => {
    setName(e.target.value);
  };

  const handleEmailChange=(e) => {
    setEmail(e.target.value);
  };

  const handleSubmit=(e) => {
    e.preventDefault();
    if(validateEmail(email)){
      document.getElementById('registration-form').reset();
      navigateSuccessPage();
    } else {
      document.getElementById('error-message').style.display='flex';
    }
  }

  return (
    <Container>
        <IntroSubTitles text1={text1} text2={text2} />
        <form id='registration-form'>
          <input type="text" placeholder='Enter your name' onChange={e => handleNameChange(e)} />
          <input type="text" placeholder='Enter your email' onChange={e => handleEmailChange(e)} />
          <p id='error-message'><MdError style={iconStyles} />Enter a valid email address</p>
          <input type="submit" id='submit-btn' value="submit" disabled={!allFieldsEntered} onClick={e => handleSubmit(e)} />
        </form>
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 120.78px;
  form {
    padding-top: 62px;
    input {
      width: 417px;
      padding: 24px 36px;
      display: block;
      background-color: #EFEFEF;
      border-radius: 64px;
      box-sizing: border-box;
      font-family: Manrope;
      font-size: 20px;
      color: #827A7A;
      border: none;
      margin-bottom: 24px;
    }
    input[type=email] {
      margin-bottom: 0;
    },
    input[type=submit]:disabled {
      background-color: #C9C9C9;
    }
    input[type=submit]:enabled {
      margin: 47px 0 0;
      font-weight: 600;
      padding: 26.11px 49.61px 26.11px 41.78px;
      font-size: 18px;
      background-color: #1C1C1C;
      color: white;
      text-transform: capitalize;
      cursor: pointer;
    }
    input[type=submit]:enabled:hover {
      background-color: var(--primaryCTAHoverColor);
    }
    #error-message {
      color: #FF0808;
      font-size: 16px;
      margin: 12px 0 0;
      font-family: Manrope;
      display: flex;
      align-items: center;
    }
  }
`;

const iconStyles= {
  height: '16px',
  width: '16px',
  marginRight: '7px'
}
