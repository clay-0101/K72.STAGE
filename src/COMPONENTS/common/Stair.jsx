import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
    const stairsRef = useRef(null)
    const pageRef = useRef(null)
    const location = useLocation().pathname

    useGSAP(() => {
        const stairs = stairsRef.current.querySelectorAll('.stair')

        const tl = gsap.timeline()
 
        gsap.set(stairs, { y: '-100%' })

        tl.to(stairs, {
            y: '0%',
            duration: 0.6,
            stagger: { amount: -0.25 }
        })
        tl.to(stairs, {
            y: '100%',
            duration: 0.5,
            stagger: { amount: -0.25 },
            delay: 0.1
        })

        
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.2
        })

    }, [location])

    return (
        <div>
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
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}
export default Stair