import React from 'react'
import HomeHeader from '../components/Home Components/HomeHeader';
import HomeSuccesStories from '../components/Home Components/HomeSuccesStories';
import HomeAskQuestions from '../components/Home Components/HomeAskQuestions';
import HomeFooter from '../components/Home Components/HomeFooter';

export default function Home() {
  return (
    <>
        <HomeHeader />
        <HomeSuccesStories />
        <HomeAskQuestions />
        <HomeFooter />
    </>
  )
};


