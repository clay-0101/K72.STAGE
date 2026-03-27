import React from 'react' 
import Video from './video'

const homeHeroText = () => {
  return (
    <div className='font-[fontLight]  text-center'>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>L'étincelle</div>
        <div 
        className='text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>
                qui
            <div  className='h-[8vw] w-[15vw] '>
                <Video/>
            </div>
                génère
            </div>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>la créativité</div>


    </div>
  )
}

export default homeHeroText