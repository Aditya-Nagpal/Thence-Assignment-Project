import React from 'react'
import styled from 'styled-components'
import "@fontsource/covered-by-your-grace"
import "@fontsource/manrope"
import HomePageGirlImage from '../../assets/images/home page girl.png'
import spark from '../../assets/images/spark.png'
import '../../fonts/Switzer-Medium.ttf'
import rocket from '../../assets/images/rocket.png'
import { FaArrowRight } from "react-icons/fa"

export default function HomeSuccesStories() {
  return (
    <Container>
      <header>
        <p>Success stories</p>
        <p>Every success story we've encountered.</p>
      </header>

      <main>
        <section>
          <div id='card-1'>
            <img src={spark} alt="spark" width={79.17} height={78.48} />
            <p>40%</p>
            <small>Achieved reduction in project execution time by optimising team availability</small>
          </div>

          <div id='girl-img'>
            <img src={HomePageGirlImage} alt="Girl" width={506.98} height={546.27} />
          </div>

          <div id='card-2'>
            <img src={rocket} alt="Rocket" width={52} height={52} />
            <div>
              <p>10 days</p>
              <p>staff deployment</p>
            </div>
          </div>

          <div id='card-3'>
            <div>
              <span>$0.5 </span>
              <span>million</span>
            </div>
            <p>Reduced client expenses by saving on hiring and employee costs.</p>
          </div>
        </section>

        <section>
          <p>Enhance fortune 50 company's insights teams research capabilities</p>
          <div className='ellipse-div'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button>explore more<FaArrowRight style={{height: '24px', width: '24px', marginLeft: '16px'}} /></button>
        </section>
      </main>
    </Container>
  )
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  header{
    text-align: center;
    width: 588px;
    margin-bottom: 112px;
    p:first-child{
      margin: 0 0 16px;
      font-family: Covered By Your Grace;
      color: #2DA950;
      font-size: 36px;
      line-height: 110%;
      letter-spacing: -0.02em;
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
  main {
    display: flex;
    width: 100%;
    padding-left: 62px;
    section:first-child {
      min-width: 727.49px;
      position: relative;
      height: 596px;
      #girl-img img{
        border-radius: 50.7px;
        position: absolute;
        top: 0;
        left: 144.69px;
      }
      #card-1 {
        width: 267.82px;
        border-radius: 27.11px;
        position: absolute;
        background-color: white;
        left: 0;
        top: 114px;
        z-index: 1;
        padding: 30px;
        box-sizing: border-box;
        -webkit-box-shadow: 0px 22.59px 36.14px 0px rgba(30,30,30,0.09);
        -moz-box-shadow: 0px 22.59px 36.14px 0px rgba(30,30,30,0.09);
        box-shadow: 0px 22.59px 36.14px 0px rgba(30,30,30,0.09);
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
        p {
          font-family: Switzer-Medium;
          font-size: 64px;
          margin: 0;
          color: #1C1C1C;
          letter-spacing: -0.03em;
        }
        small {
          font-size: 18px;
          line-height: 130%;
          color: #828282;
        }
      }
      #card-2 {
        width: 245px;
        box-sizing: border-box;
        border-radius: 111.54px;
        background-color: white;
        display: flex;
        padding: 16px 32px 16px 16px;
        position: absolute;
        top: 412.71px;
        left: 86.19px;
        -webkit-box-shadow: 0px 15.21px 35.49px 0px rgba(0,0,0,0.09);
        -moz-box-shadow: 0px 15.21px 35.49px 0px rgba(0,0,0,0.09);
        box-shadow: 0px 15.21px 35.49px 0px rgba(0,0,0,0.09);
        img {
          margin-right: 14px;
        }
        div {
          p {
            margin: 0;
            font-family: Manrope;
          }
          p:first-child {
            color: #1C1C1C;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 2px;
          }
          p:nth-child(2) {
            color: #828282;
            font-size: 16px;
          }
        }
      }
      #card-3 {
        background-color: #002E18;
        border-radius: 28.36px;
        width: 290.49px;
        padding: 34px 30px 40px 36px;
        position: absolute;
        top: 357px;
        left: 437px;
        box-sizing: border-box;
        -webkit-box-shadow: 0px 23.63px 37.81px 0px rgba(30,30,30,0.09);
        -moz-box-shadow: 0px 23.63px 37.81px 0px rgba(30,30,30,0.09);
        box-shadow: 0px 23.63px 37.81px 0px rgba(30,30,30,0.09);
        div {
          span {
            font-family: Switzer-Medium;
          }
          span:first-child {
            font-size: 63.37px;
            color: white;
            letter-spacing: -0.03em;
            line-height: 120%;
          }
          span:nth-child(2) {
            text-transform: uppercase;
            color: #A6A3A0;
            font-size: 22.81px;
            line-height: 140%;
            letter-spacing: 0.01em;
          }
        }
        p {
          line-height: 130%;
          font-family: Manrope;
          font-size: 18px;
          color: #CCCCCC;
          margin: 20px 0 0;
        }
      }
    }
    section:nth-child(2) {
      padding: 71px 107.51px 0;
      font-family: Manrope;
      p {
        font-size: 40px;
        letter-spacing: -0.02em;
        line-height: 120%;
        color: #1C1C1C;
        font-weight: 600;
        max-width: 398px;
        margin: 0 0 55px;
      }
      .ellipse-div {
        margin-bottom: 130.25px;
        div {
          display: inline-block;
          height: 10.75px;
          width: 10.75px;
          background-color: #E4E3E3;
          border-radius: 50%;
          margin-left: 12px;
        }
        div:first-child {
          background-color: #2DA950;
        }
      }
      button {
        padding: 31px 40px;
        color: white;
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
        font-family: Manrope;
        border-radius: 100px;
        background-color: #1C1C1C;
        display: flex;
        align-items: center;
        img {
          margin-left: 16px;
        }
      }
    }
  }
`;
