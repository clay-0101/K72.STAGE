import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
    const parentDivRef = useRef(null)
    const pageRef = useRef(null)
    const location = useLocation().pathname
    console.log(location)
    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(parentDivRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            duration: 0.6,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            duration: 0.5,
            stagger: {
                amount: -0.25
            }
        })
        tl.to(parentDivRef.current, {
            display: 'none',
            
        })
        tl.to('.stair', {
            y: '0%',

        })
      gsap.from(pageRef.current,{
        opacity : 0, 
        delay : 1.2
      })

    }, [location])
    return (

        <div>
            <div ref={parentDivRef} className='h-screen w-full fixed top-0 z-10'>
                <div className='h-full w-full flex '>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stair