import React from 'react'
import Banner from './Banner'
import TopSelling from './TopSelling'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <div>
      
      <Banner/>
      <TopSelling/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
