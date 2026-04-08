import React from 'react'
import Video from '../COMPONENTS/home/Video'
import HomeHeroText from '../COMPONENTS/home/HomeHeroText'
import HomeBottomText from '../COMPONENTS/home/HomeBottomText'
import MontrealClock from '../COMPONENTS/home/MontRealClock'


const Home = ({homePresence}) => {

  return (
    <div 
    className='text-white'
    // style={{display:`${homePresence}`}}
    >
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