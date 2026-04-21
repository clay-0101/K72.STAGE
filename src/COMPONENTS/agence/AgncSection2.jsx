import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const AgncSection2 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to('.section2',{
            backgroundColor : 'black',
            duration : 0.5,
            scrollTrigger:{
                trigger : '.section2',
                start : 'top 90%',
                end : 'top -30%',
                scrub : true,
                markers : true
            }

        })
    })
    return (
        <div className='section2 h-screen w-full '>
            <div className='w-full h-[25vw] font-[fontBold] text-lg flex justify-center gap-[5vw] mt-[10vw] '>
                <div className='w-[25%] h-full flex flex-col justify-between '>
                    <h2>Expertise</h2>
                    <h2>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h2>
                </div>
                <div className='w-[25%] h-full flex flex-col justify-between '>
                    <ul>
                        <li>Stratégie</li>
                        <li>Publicité</li>
                        <li>Branding</li>
                        <li>Design</li>
                        <li>Contenu</li>
                    </ul>
                    <h2>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</h2>
                </div>
                <div className='w-[25%] h-full flex flex-col justify-end '>
                    <h2>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </h2>
                </div>
            </div>
        </div>
    )
}

export default AgncSection2