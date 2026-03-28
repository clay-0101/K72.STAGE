import React from 'react' 
import Video from './video'

const homeHeroText = () => {
  return (
    <div className='font-[fontLight]  text-center'>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>L'étincelle</div>
        <div 
        className='text-[9.5vw] flex justify-center items-center uppercase leading-0'>
                qui
            <div id="vdoDiv" className='h-[7.2vw] w-[16vw] p-[1px] mb-5 rounded-full overflow-hidden '>
                <Video className='rounded-full' />
            </div>
                génère
            </div>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>la créativité</div>


    </div>
  )
}

export default homeHeroText