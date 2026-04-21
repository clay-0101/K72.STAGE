import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AgncSection1 from '../COMPONENTS/agence/AgncSection1'
import AgncSection2 from '../COMPONENTS/agence/AgncSection2'
import AgncSection3 from '../COMPONENTS/agence/AgncSection3'

const Agence = () => {




  return (
    <div className='h-screen '>
      <AgncSection1/>
      <AgncSection2/>
      <AgncSection3/>
    </div>
  )
}

export default Agence