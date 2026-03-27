import React from 'react'
import Video from '../COMPONENTS/home/video'
import HomeHeroText from '../COMPONENTS/home/homeHeroText'
import HomeBottomText from '../COMPONENTS/home/homeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative '>
           <HomeHeroText/> 
           {/* <HomeBottomText/> */}
        </div>
    </div>
  )
}

export default Home