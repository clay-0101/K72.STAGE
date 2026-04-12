import React from 'react'
import Video from './Video'

const homeHeroText = () => {
    return (
        <div className='font-[fontLight]  text-center'>
            <div className='relative top-[40vh] md:top-0'>
                <div className='text-[7vh] md:text-[9.5vw] flex justify-center items-center uppercase leading-[6vh] md:leading-[10vw]'>L'étincelle</div>
                <div
                    className='text-[7vh] md:text-[9.5vw] flex justify-center items-center uppercase leading-[8vh] md:leading-0'>
                    qui
                    <div id="vdoDiv" className='h-[7.2vw] w-[16vw] p-[1px] mb-1 md:mb-5 rounded-full overflow-hidden '>
                        <Video className='rounded-full' />
                    </div>
                    génère
                </div>
                <div className='text-[7vh] md:text-[9.5vw] flex justify-center items-center uppercase leading-[10vw]'>la créativité</div>
            </div>
            <div className='h-[65vh] md:h-[15vw] flex justify-end items-end'>
                <pre className='text-[12px] md:text-sm font-[fontLight] text-left' >
                    {`                  K72 est une agence qui pense
chaque action pour nourrir la marque. Demain,
dans 5 mois et dans 5 ans. On cherche la
friction qui crée l’étincelle pour générer de
l’émotion. Pour assurer une relation honnête,
on est sans filtre, on dit ce qui doit être dit, on
fait ce qui doit être fait.`}
                </pre>
            </div>

        </div>
    )
}

export default homeHeroText