import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import MontrealClock from '../home/MontRealClock'


const FullScreenNav = ({ navPresence }) => {

    const stairsRef = useRef(null)
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
        const stairs = stairsRef.current.querySelectorAll('.stair')

        const tl = gsap.timeline()

        tl.to(stairs,{
            height : '100%',
           duration : 0.6,
           stagger : {amount : -0.2}
        })
 


    })

    return (
        <div
            className='fullNavDiv pt-[1px] bg-black h-screen w-full overflow-hidden  absolute bottom-0 left-0 z-99'
            style={{ display: `block` }}
        >
            <div className=' mt-[12vw]'>
                {arrOfRows.map((elem, idx) => {
                    return <div
                        key={idx}
                        onMouseEnter={MouseEnterHandler}
                        onMouseLeave={MouseLeaveHandler}
                        className={`border-t-[0.5px] border-[#b3b3b3af] font-[fontBold] relative relative overflow-hidden ${idx === arrOfRows.length - 1 ? 'border-b-1' : ''}`}>


                        <h1 className='text-[8.5vw] text-center text-white leading-[8.5vw]'>{elem.title}</h1>
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
            <div
                ref={stairsRef}
                className='h-screen w-full fixed top-0 z-100 flex overflow-hidden pointer-events-none'
            >
                <div className='stair h-[0%] w-1/5 bg-black'></div>
                <div className='stair h-[0%] w-1/5 bg-white'></div>
                <div className='stair h-[0%] w-1/5 bg-black'></div>
                <div className='stair h-[0%] w-1/5 bg-white'></div>
                <div className='stair h-[0%] w-1/5 bg-black'></div>
            </div>
        </div>
    )
}

export default FullScreenNav