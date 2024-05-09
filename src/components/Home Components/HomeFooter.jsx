import React from 'react'
import styled from 'styled-components'
import copyright from '../../assets/images/copyright symbol.png'
import '../../fonts/manrope-medium.woff'
import '../../fonts/manrope-regular.woff'

export default function HomeFooter() {
  return (
    <Container>
      <main className='footer-text'>
        <p><img src={copyright} alt="copyright" height={20} width={20} />Talup 2023. All rights reserved</p>
        <div>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </main>
    </Container>
  )
}

const Container=styled.div`
  padding: 20px 32px 32px;
  .footer-text p,.footer-text span{
    margin: 0;
    font-size: 18px;
  }
  main {
    padding: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
    border-radius: 40px;
    p:first-child {
      display: flex;
      align-items: center;
      font-family: Manrope Medium;
      img {
        margin-right: 10px;
        padding: 2px;
      }
    }
    div {
      span {
        font-family: Manrope Regular;
        text-decoration: underline;
      }
      span:nth-child(2) {
        margin-left: 52px;
      }
    }
  }
`;
