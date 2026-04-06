import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'

const FullScreenNav = () => {


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
            imgSrc1: '/navimg1.png',
            imgSrc2: '/navimg1.png'
        },
        {
            title: 'BLOGUE',
            movingText1: 'Lire les articles ',
            imgSrc1: '/navimg4.jpg',
            imgSrc2: '/navimg4.jpg'
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
           gsap.to(runningText,{
            height :'100%',
            duration : 0.2,
            ease : 'linear'

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
                top : 'auto'
            })
        }
        gsap.to(runningText,{
            height :'0%',
             duration : 0.2,
            ease : 'linear'
        })
    }



    return (
        <div className='pt-[1px] bg-black h-screen'>
            <div className=' mt-[12vw]'>
                {arrOfRows.map((elem, idx) => {
                    return <div
                        key={idx}
                        onMouseEnter={MouseEnterHandler}
                        onMouseLeave={MouseLeaveHandler}
                        className={`border-t-[0.5px] border-[#b3b3b3af] font-[fontBold] relative relative overflow-hidden ${idx === arrOfRows.length - 1 ? 'border-b-1' : ''}`}>


                        <h1 className='text-[8.5vw] text-center text-white leading-[8.5vw]'>{elem.title}</h1>
                        <div className='runningText   flex overflow-x-auto text-nowrap items-center bg-[#D3FD50] top-[0]  absolute h-[0%] uppercase'>
                            <h2 className='text-[8vw] leading-[0.8] pt-2.5'>{elem.movingText1}</h2>
                            <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                                <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                            </div>

                            <h2 className='text-[8vw] leading-[0.8] pt-2.5'>{elem.movingText1}</h2>
                            <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                                <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                            </div>
                            <h2 className='text-[8vw] leading-[0.8] pt-2.5'>{elem.movingText1}</h2>
                            <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                                <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                            </div>

                            <h2 className='text-[8vw] leading-[0.8] pt-2.5'>{elem.movingText1}</h2>
                            <div className='h-25 w-[17vw] flex-shrink-0 overflow-hidden rounded-full mx-5'>
                                <img className='h-full w-full object-cover' src={elem.imgSrc1} alt="1" />
                            </div>

                        </div>

                    </div>

                })}
            </div>
        </div>
    )
}

export default FullScreenNav