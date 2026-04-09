import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import MontrealClock from '../home/MontRealClock'


const FullScreenNav = ({ navPresence , setNavPresence}) => {


    const stairsRef = useRef(null)
    const tl = useRef();
    const arrOfRows = [
        {
            title: 'PROJECT',
            movingText1: 'POUR TOUT VOIR',
            imgSrc1: '/navimg1.png',
            imgSrc2: '/navimg1.png'
        },
        {
            title: 'AGENCE',
            movingText1: 'Pour tout savoir',
            imgSrc1: '/img4(2).jpg',
            imgSrc2: '/img4(2).jpg'
        },
        {
            title: 'CONTACT',
            movingText1: 'Pour envoyer un fax ',
            imgSrc1: '/navimg3.svg',
            imgSrc2: '/navimg3.svg'
        },
        {
            title: 'BLOGUE',
            movingText1: 'Lire les articles ',
            imgSrc1: '/navimg4.jpg',
            imgSrc2: '/navimg5.gif'
        }
    ]
    const MouseEnterHandler = (e) => {
        let element = e.currentTarget
        let runningText = element.querySelector('.runningText')
        let relY = e.clientY - element.getBoundingClientRect().top
        let height = element.offsetHeight

        if (relY < height / 2) {
            gsap.set(runningText, {
                top: 0
            })
        }
        else {
            gsap.set(runningText, {
                bottom: 0
            })
        }
        gsap.to(runningText, {
            height: '100%',
            duration: 0.2,
            ease: 'linear'

        })
    }
    const MouseLeaveHandler = (e) => {
        let element = e.currentTarget
        let runningText = element.querySelector('.runningText')
        let relY = e.clientY - element.getBoundingClientRect().top
        let height = element.offsetHeight

        if (relY < height / 2) {
            gsap.set(runningText, {
                top: 0,
                bottom: 'auto'
            })
        }
        else {
            gsap.set(runningText, {
                bottom: 0,
                top: 'auto'
            })
        }
        gsap.to(runningText, {
            height: '0%',
            duration: 0.2,
            ease: 'linear'
        })
    }
    useGSAP(() => {
        const stairs = stairsRef.current.querySelectorAll('.stair');
         tl.current = gsap.timeline({ paused: true }); 

        // Timeline setup karo
            tl.current        
            .set('.containerDiv', { display: 'block' })
            .set(stairs, { y: '-100%' })
            .set('.rotateDiv', { rotationX: 90, opacity: 0 })
            .to(stairs, {
                y: '0%',
                duration: 0.4,
                stagger: { amount: 0.3 },
                ease: "power3.inOut"
            })
            .to('.fullNavDiv', { visibility: 'visible', opacity: 1, duration: 0.1 })
            .to('.crossDiv', { x: '0%' }, "<") 
            .to('.rotateDiv', {
                rotationX: 0,
                opacity: 1,
                transformOrigin: "top center",
                duration: 0.5,
                stagger: 0.05
            }, "-=0.2");

  

    });
    useGSAP(()=>{
        if(navPresence === 'block'){
            tl.current.play()
        }else if (navPresence === 'hidden'){
            tl.current.reverse()
        }
    },[navPresence])

    return (
        <div className='containerDiv hidden'>
            <div 
            onClick={()=>{
               setNavPresence('hidden')  
            }}
            className='overflow-hidden h-[7vw] w-[7vw] absolute top-3 right-3 z-999'>
                <div className='crossDiv group h-full w-full  flex justify-between translate-x-[8vw]'>
                    <div className='child h-[10vw] w-[2px] -rotate-z-45 origin-top bg-white group-hover:bg-[#D3FD50] '></div>
                    <div className='child h-[10vw] w-[2px] rotate-z-45 origin-top  bg-white group-hover:bg-[#D3FD50]'></div>
                </div>
            </div>
            <div
                className=' fullNavDiv pt-[1px] bg-black  h-screen w-full overflow-hidden  absolute bottom-0 left-0 z-99 invisible'
            // style={{ display: `${navPresence}` }}
            >
                <div className='rotateDiv mt-[12vw]'>
                    {arrOfRows.map((elem, idx) => {
                        return <div
                            key={idx}

                            onMouseEnter={MouseEnterHandler}
                            onMouseLeave={MouseLeaveHandler}
                            className={`border-t-[0.5px]   border-[#b3b3b3af] font-[fontBold] relative relative overflow-hidden ${idx === arrOfRows.length - 1 ? 'border-b-1' : ''}`}>


                            <h1 className='rotateDiv text-[8.5vw] text-center  text-white leading-[8.5vw]'>{elem.title}</h1>
                            <div className='runningText   flex overflow-x-auto text-nowrap items-center bg-[#D3FD50] top-[0]  absolute h-[0%] uppercase'>
                                <h2 className='text-[8vw] leading-[0.8] pt-2.5 text-black'>{elem.movingText1}</h2>
                                <div className={`flex-shrink-0 overflow-hidden  mx-5 ${idx === 2 ? 'h-30 w-30' : 'h-25 w-[17vw] rounded-full'}`}>
                                    <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                                </div>

                                <h2 className='text-[8vw] leading-[0.8] pt-2.5 text-black'>{elem.movingText1}</h2>
                                <div className={`flex-shrink-0 overflow-hidden  mx-5 ${idx === 2 ? 'h-30 w-30' : 'h-25 w-[17vw] rounded-full'}`}>
                                    <img className='h-full w-full object-cover' src={elem.imgSrc2} alt="1" />
                                </div>
                                <h2 className='text-[8vw] leading-[0.8] pt-2.5 text-black'>{elem.movingText1}</h2>
                                <div className={`flex-shrink-0 overflow-hidden  mx-5 ${idx === 2 ? 'h-30 w-30' : 'h-25 w-[17vw] rounded-full'}`}>
                                    <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                                </div>

                                <h2 className='text-[8vw] leading-[0.8] pt-2.5 text-black'>{elem.movingText1}</h2>
                                <div className={`flex-shrink-0 overflow-hidden  mx-5 ${idx === 2 ? 'h-30 w-30' : 'h-25 w-[17vw] rounded-full'}`}>
                                    <img className='h-full w-full object-cover' src={elem.imgSrc2} alt="1" />
                                </div>

                            </div>

                        </div>

                    })}
                </div>
                <MontrealClock />
            </div>
            <div
                ref={stairsRef}
                className='h-screen w-full fixed top-0 z-10 flex overflow-hidden pointer-events-none'
            >
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
    )
}

export default FullScreenNav