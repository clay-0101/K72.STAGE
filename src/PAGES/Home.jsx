import React from 'react'
import Video from '../COMPONENTS/home/video'
import HomeHeroText from '../COMPONENTS/home/homeHeroText'
import HomeBottomText from '../COMPONENTS/home/homeBottomText'
import MontrealClock from '../COMPONENTS/home/MontRealClock'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen flex flex-col justify-between relative overflow-hidden '>
           <HomeHeroText/> 
           <HomeBottomText/>
           <MontrealClock/>
           
        </div>
    </div>
  )
}

export default Home